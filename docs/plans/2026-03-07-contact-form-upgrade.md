# Contact Form Upgrade — PHP Backend + Image Uploads

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replace the Cloudflare Workers contact form with a PHP+PHPMailer backend (matching the DFW Chaos Coordinators reference site), add phone field, image uploads with client-side compression, HTML email template, rate limiting, and origin validation.

**Architecture:** Static Astro build served from Digital Ocean. Contact form POSTs multipart/form-data to `/api/contact.php`. PHPMailer sends HTML email via SMTP with image attachments. Alpine.js handles client-side validation, image compression, and submission UX.

**Tech Stack:** Astro (static output), Alpine.js, PHP 8+, PHPMailer 6.x, browser-image-compression, Tailwind CSS v4

**Reference site:** `/Users/devsprout/Documents/Code/DFW Chaos Coordinators/site-rewrite`

---

### Task 1: Remove Cloudflare adapter and switch to static output

**Files:**
- Modify: `astro.config.mjs`
- Modify: `package.json`
- Delete: `wrangler.toml`
- Delete: `src/pages/api/contact.ts`
- Delete: `public/_headers`

**Step 1: Update astro.config.mjs — remove cloudflare adapter**

Replace the entire file with:

```js
// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import alpinejs from '@astrojs/alpinejs';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://jcloutdoors.com',
  integrations: [alpinejs({ entrypoint: '/src/alpine.ts' }), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
```

**Step 2: Remove Cloudflare dependencies**

Run: `npm uninstall @astrojs/cloudflare`

**Step 3: Delete unused files**

Run:
```bash
rm wrangler.toml
rm src/pages/api/contact.ts
rm public/_headers
```

Note: If `src/pages/api/` directory is now empty, delete it too.

**Step 4: Update siteConfig.ts**

In `src/data/siteConfig.ts`, update:
- `email`: `'inquire@jcloutdoors.com'`
- `url`: `'https://jcloutdoors.com'`

**Step 5: Verify build still works**

Run: `npm run build`
Expected: Successful static build with no Cloudflare references.

**Step 6: Commit**

```bash
git add -A
git commit -m "Remove Cloudflare adapter, switch to static output for Digital Ocean

Update domain to jcloutdoors.com and email to inquire@jcloutdoors.com"
```

---

### Task 2: Add PHPMailer and PHP backend

**Files:**
- Create: `public/api/PHPMailer/Exception.php` (copy from reference)
- Create: `public/api/PHPMailer/PHPMailer.php` (copy from reference)
- Create: `public/api/PHPMailer/SMTP.php` (copy from reference)
- Create: `public/api/smtp_config.php` (template — gitignored)
- Create: `public/api/.htaccess`
- Create: `public/api/contact.php`
- Modify: `.gitignore`

**Step 1: Copy PHPMailer library from reference site**

Run:
```bash
mkdir -p public/api/PHPMailer
cp "/Users/devsprout/Documents/Code/DFW Chaos Coordinators/site-rewrite/public/api/PHPMailer/Exception.php" public/api/PHPMailer/
cp "/Users/devsprout/Documents/Code/DFW Chaos Coordinators/site-rewrite/public/api/PHPMailer/PHPMailer.php" public/api/PHPMailer/
cp "/Users/devsprout/Documents/Code/DFW Chaos Coordinators/site-rewrite/public/api/PHPMailer/SMTP.php" public/api/PHPMailer/
```

**Step 2: Create smtp_config.php template**

Create `public/api/smtp_config.php`:

```php
<?php
/**
 * SMTP Configuration — JCustom Outdoors
 *
 * This file contains SMTP credentials and MUST NOT be committed to git.
 * Create this file directly on the server with the real values.
 */

define('SMTP_HOST',     'localhost');
define('SMTP_PORT',     587);
define('SMTP_USERNAME', 'inquire@jcloutdoors.com');
define('SMTP_PASSWORD', 'CHANGE_ME');
```

**Step 3: Add smtp_config.php to .gitignore**

Append to `.gitignore`:
```
# SMTP credentials (server-only)
public/api/smtp_config.php
```

**Step 4: Create .htaccess for API directory**

Create `public/api/.htaccess`:

```apache
# Deny directory listing
Options -Indexes

# Only allow POST to contact.php (Apache 2.4 syntax)
<Files "contact.php">
    <LimitExcept POST>
        Require all denied
    </LimitExcept>
</Files>
```

**Step 5: Create contact.php**

Create `public/api/contact.php` — adapted from reference site with JCustom-specific fields and branding:

```php
<?php
/**
 * Contact Form Handler — JCustom Outdoors
 *
 * Receives multipart POST from the contact form, validates input,
 * and sends a formatted HTML email with any attached images via PHPMailer.
 */

// ── SMTP Credentials ────────────────────────────────────────────────────────
$smtpConfigPath = __DIR__ . '/smtp_config.php';
if (!file_exists($smtpConfigPath)) {
    error_log('Contact form: smtp_config.php not found');
    http_response_code(500);
    echo json_encode(['type' => 'error', 'text' => 'Mail configuration missing. Please call us directly.']);
    exit;
}
require_once $smtpConfigPath;

// ── Configuration ────────────────────────────────────────────────────────────
define('RECIPIENT_EMAIL', 'inquire@jcloutdoors.com');
define('FROM_EMAIL',      'inquire@jcloutdoors.com');
define('FROM_NAME',       'JCustom Outdoors');
define('SITE_URL',        'https://jcloutdoors.com');
define('MAX_FILES',       5);
define('MAX_FILE_SIZE',   2 * 1024 * 1024);
define('RATE_LIMIT',      5);
define('RATE_LIMIT_DIR',  sys_get_temp_dir() . '/jcustom-contact-rate-limits');

// ── CORS & Method Gate ───────────────────────────────────────────────────────
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['type' => 'error', 'text' => 'Method not allowed']);
    exit;
}

// ── Origin Check ─────────────────────────────────────────────────────────────
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
$allowedOrigins = [
    'https://www.jcloutdoors.com',
    'https://jcloutdoors.com',
];

if (
    !in_array($origin, $allowedOrigins, true)
    && !preg_match('/^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/', $origin)
) {
    http_response_code(403);
    echo json_encode(['type' => 'error', 'text' => 'Forbidden']);
    exit;
}

// ── Honeypot ─────────────────────────────────────────────────────────────────
if (!empty($_POST['website'])) {
    echo json_encode(['type' => 'success', 'text' => "Thank you! We'll be in touch shortly."]);
    exit;
}

// ── Rate Limiting ────────────────────────────────────────────────────────────
function checkRateLimit(): bool {
    $dir = RATE_LIMIT_DIR;
    if (!is_dir($dir) && !mkdir($dir, 0700, true)) {
        error_log('Contact form: could not create rate limit directory: ' . $dir);
        return true;
    }

    $ip   = $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0';
    $file = $dir . '/' . md5($ip) . '.json';
    $now  = time();
    $window = 3600;

    $attempts = [];
    if (file_exists($file)) {
        $data = json_decode(file_get_contents($file), true);
        if (is_array($data)) {
            $attempts = array_filter($data, fn($t) => ($now - $t) < $window);
        }
    }

    if (count($attempts) >= RATE_LIMIT) {
        return false;
    }

    $attempts[] = $now;
    file_put_contents($file, json_encode(array_values($attempts)), LOCK_EX);
    return true;
}

if (!checkRateLimit()) {
    http_response_code(429);
    echo json_encode(['type' => 'error', 'text' => 'Too many submissions. Please try again later.']);
    exit;
}

// ── Validation ───────────────────────────────────────────────────────────────
function clean(string $value): string {
    return htmlspecialchars(trim($value), ENT_QUOTES, 'UTF-8');
}

$required = ['name', 'email', 'phone', 'message'];
$fields   = [];

foreach ($required as $key) {
    $val = $_POST[$key] ?? '';
    if ($val === '') {
        http_response_code(400);
        echo json_encode(['type' => 'error', 'text' => "Missing required field: $key"]);
        exit;
    }
    $fields[$key] = clean($val);
}

// Length limits
if (strlen($fields['name']) > 100 || strlen($fields['email']) > 254 || strlen($fields['message']) > 5000) {
    http_response_code(400);
    echo json_encode(['type' => 'error', 'text' => 'One or more fields exceed the maximum allowed length.']);
    exit;
}

if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['type' => 'error', 'text' => 'Please enter a valid email address.']);
    exit;
}

// Optional fields
$fields['projectType'] = clean($_POST['projectType'] ?? '');
$fields['timeline']    = clean($_POST['timeline'] ?? '');

// ── File Validation ──────────────────────────────────────────────────────────
$attachments = [];
$allowedMimes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/heic', 'image/heif'];

if (!empty($_FILES['files']) && is_array($_FILES['files']['name'])) {
    $fileCount = count(array_filter($_FILES['files']['name']));

    if ($fileCount > MAX_FILES) {
        http_response_code(400);
        echo json_encode(['type' => 'error', 'text' => 'Too many files. Maximum is ' . MAX_FILES . '.']);
        exit;
    }

    for ($i = 0; $i < $fileCount; $i++) {
        $err = $_FILES['files']['error'][$i];
        if ($err !== UPLOAD_ERR_OK) {
            if ($err === UPLOAD_ERR_INI_SIZE || $err === UPLOAD_ERR_FORM_SIZE) {
                $safeName = basename(preg_replace('/[^\w.\-]/', '_', $_FILES['files']['name'][$i]));
                http_response_code(400);
                echo json_encode(['type' => 'error', 'text' => $safeName . ' exceeds the 2 MB limit.']);
                exit;
            }
            continue;
        }

        $tmpPath = $_FILES['files']['tmp_name'][$i];
        $name    = basename(preg_replace('/[^\w.\-]/', '_', $_FILES['files']['name'][$i]));
        $size    = $_FILES['files']['size'][$i];

        if ($size > MAX_FILE_SIZE) {
            http_response_code(400);
            echo json_encode(['type' => 'error', 'text' => "$name exceeds the 2 MB limit."]);
            exit;
        }

        $finfo = new finfo(FILEINFO_MIME_TYPE);
        $mime  = $finfo->file($tmpPath);

        if (!in_array($mime, $allowedMimes, true)) {
            http_response_code(400);
            echo json_encode(['type' => 'error', 'text' => "$name is not a supported image type."]);
            exit;
        }

        $attachments[] = [
            'path' => $tmpPath,
            'name' => $name,
            'mime' => $mime,
        ];
    }
}

// ── Build & Send Email ───────────────────────────────────────────────────────
require_once __DIR__ . '/PHPMailer/Exception.php';
require_once __DIR__ . '/PHPMailer/PHPMailer.php';
require_once __DIR__ . '/PHPMailer/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception as PHPMailerException;

try {
    $mail = new PHPMailer(true);

    $mail->isSMTP();
    $mail->SMTPDebug  = 0;
    $mail->Debugoutput = 'error_log';
    $mail->Host       = SMTP_HOST;
    $mail->Port       = SMTP_PORT;
    $mail->SMTPAuth   = true;
    $mail->Username   = SMTP_USERNAME;
    $mail->Password   = SMTP_PASSWORD;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;

    $mail->SMTPOptions = [
        'ssl' => [
            'verify_peer'       => false,
            'verify_peer_name'  => false,
            'allow_self_signed' => true,
        ],
    ];

    $mail->setFrom(FROM_EMAIL, FROM_NAME);
    $mail->addAddress(RECIPIENT_EMAIL);
    $mail->addReplyTo($fields['email'], $fields['name']);

    $mail->isHTML(true);
    $mail->CharSet = 'UTF-8';
    $mail->Subject = 'New Inquiry from ' . $fields['name'];

    // Build HTML body
    $projectRow = $fields['projectType'] ? "<tr><td style=\"padding:8px 16px;font-weight:600;color:#222;\">Project Type</td><td style=\"padding:8px 16px;\">{$fields['projectType']}</td></tr>" : '';
    $timelineRow = $fields['timeline'] ? "<tr><td style=\"padding:8px 16px;font-weight:600;color:#222;\">Timeline</td><td style=\"padding:8px 16px;\">{$fields['timeline']}</td></tr>" : '';
    $imageNote = count($attachments) > 0 ? '<p style="margin-top:16px;color:#666;font-size:14px;">' . count($attachments) . ' image(s) attached.</p>' : '';

    $mail->Body = <<<HTML
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
      <div style="background:#B08D57;padding:16px 24px;">
        <h1 style="margin:0;color:#fff;font-size:20px;">New Inquiry — JCustom Outdoors</h1>
      </div>
      <div style="padding:24px;background:#f9f9f9;">
        <table style="width:100%;border-collapse:collapse;font-size:15px;color:#333;">
          <tr><td style="padding:8px 16px;font-weight:600;color:#222;">Name</td><td style="padding:8px 16px;">{$fields['name']}</td></tr>
          <tr><td style="padding:8px 16px;font-weight:600;color:#222;">Phone</td><td style="padding:8px 16px;"><a href="tel:{$fields['phone']}">{$fields['phone']}</a></td></tr>
          <tr><td style="padding:8px 16px;font-weight:600;color:#222;">Email</td><td style="padding:8px 16px;"><a href="mailto:{$fields['email']}">{$fields['email']}</a></td></tr>
          {$projectRow}
          {$timelineRow}
          <tr><td style="padding:8px 16px;font-weight:600;color:#222;vertical-align:top;">Message</td><td style="padding:8px 16px;">{$fields['message']}</td></tr>
        </table>
        {$imageNote}
      </div>
      <div style="padding:12px 24px;background:#eee;font-size:12px;color:#888;">
        Sent from <a href="https://jcloutdoors.com">jcloutdoors.com</a> contact form
      </div>
    </div>
    HTML;

    // Plain-text fallback
    $mail->AltBody = "New Inquiry — JCustom Outdoors\n\n"
        . "Name: {$fields['name']}\n"
        . "Phone: {$fields['phone']}\n"
        . "Email: {$fields['email']}\n"
        . ($fields['projectType'] ? "Project Type: {$fields['projectType']}\n" : '')
        . ($fields['timeline'] ? "Timeline: {$fields['timeline']}\n" : '')
        . "Message: {$fields['message']}\n"
        . (count($attachments) > 0 ? "\n" . count($attachments) . " image(s) attached.\n" : '');

    foreach ($attachments as $att) {
        $mail->addAttachment($att['path'], $att['name'], 'base64', $att['mime']);
    }

    $mail->send();

    echo json_encode(['type' => 'success', 'text' => "Thank you! We'll be in touch shortly."]);

} catch (PHPMailerException $e) {
    error_log('Contact form PHPMailer error: ' . $e->getMessage());
    http_response_code(500);
    echo json_encode(['type' => 'error', 'text' => 'Failed to send message. Please try again or call us directly.']);
} catch (\Exception $e) {
    error_log('Contact form error: ' . $e->getMessage());
    http_response_code(500);
    echo json_encode(['type' => 'error', 'text' => 'An unexpected error occurred.']);
}
```

**Step 6: Verify PHP syntax**

Run: `php -l public/api/contact.php`
Expected: `No syntax errors detected`

**Step 7: Commit**

```bash
git add public/api/ .gitignore
git commit -m "Add PHP contact form backend with PHPMailer

- SMTP email via PHPMailer with HTML template
- Image attachment support (up to 5 files, 2MB each)
- Rate limiting (5/hr per IP), origin validation, honeypot
- JCustom branding in email template"
```

---

### Task 3: Add browser-image-compression library

**Files:**
- Create: `public/js/browser-image-compression.js` (copy from reference)

**Step 1: Copy the library from reference site**

Run:
```bash
mkdir -p public/js
cp "/Users/devsprout/Documents/Code/DFW Chaos Coordinators/site-rewrite/public/js/browser-image-compression.js" public/js/
```

**Step 2: Commit**

```bash
git add public/js/browser-image-compression.js
git commit -m "Add browser-image-compression library for client-side image compression"
```

---

### Task 4: Rewrite ContactSection.astro with phone field, image uploads, and PHP backend

**Files:**
- Modify: `src/components/ContactSection.astro`

**Step 1: Rewrite the contact form component**

Replace `src/components/ContactSection.astro` entirely. Key changes from current version:
- Add phone field (required)
- Add image upload with preview thumbnails and remove buttons
- Client-side image compression via browser-image-compression
- Submit as multipart/form-data to `/api/contact.php` (not JSON to `/api/contact`)
- Keep inline success/error messages
- Keep honeypot
- Keep contact info cards (phone, address, email) at top
- Match current site styling (Tailwind with `border-border`, `focus:border-black`, `btn btn-primary`, etc.)

The new component should:
1. Keep the existing contact info cards section unchanged
2. Replace the form with:
   - Name field (single full name, required)
   - Email field (required)
   - Phone field (required, new)
   - Project Type select (optional, same options)
   - Timeline select (optional, same options)
   - Message textarea (required)
   - Image upload with:
     - File input (accept="image/*", multiple, max 5)
     - Client-side validation (max 5 files, max 10MB pre-compression)
     - Preview thumbnails grid with remove buttons
     - Compression on submit (max 1.5MB, max 1920px, JPEG)
   - Honeypot (hidden)
   - Submit button with compressing/sending states
   - Inline success/error result message

3. Alpine.js `contactForm` data shape:
   ```js
   {
     form: { name, email, phone, projectType, timeline, message, website },
     files: [],          // Array of { file, preview } objects
     errors: { name, email, phone, message },
     submitting: false,
     compressing: false,
     resultMessage: '',
     resultType: '',
   }
   ```

4. Submit handler flow:
   - Honeypot check (fake success if filled)
   - Client-side validation
   - Compress images if any
   - Build FormData (multipart)
   - POST to `/api/contact.php`
   - Parse JSON response (`{ type, text }`)
   - Show inline result message, clear form on success

**Step 2: Verify dev server renders correctly**

Run: `npm run dev`
Manually check the contact section renders with all new fields.

**Step 3: Commit**

```bash
git add src/components/ContactSection.astro
git commit -m "Upgrade contact form with phone field, image uploads, and PHP backend

- Add required phone field
- Image upload with client-side compression and preview thumbnails
- Submit multipart/form-data to PHP endpoint
- Include projectType and timeline in submission (was previously ignored)"
```

---

### Task 5: Build and verify

**Step 1: Run production build**

Run: `npm run build`
Expected: Successful build, `dist/` contains the static site.

**Step 2: Verify contact.php is in dist output**

Run: `ls dist/api/`
Expected: `contact.php`, `.htaccess`, `PHPMailer/` directory present.

Note: Astro copies `public/` contents to `dist/` during build, so PHP files should be there.

**Step 3: Verify no references to old Cloudflare/Resend code remain**

Run: `grep -r "resend\|cloudflare\|wrangler" dist/ --include="*.js" --include="*.html" -l`
Expected: No matches.

**Step 4: Commit build output**

```bash
git add dist/
git commit -m "Rebuild dist with contact form upgrade"
```
