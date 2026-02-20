import type { APIRoute } from 'astro';

export const prerender = false;

interface ContactBody {
  name: string;
  email: string;
  message: string;
  website?: string;
}

export const POST: APIRoute = async ({ request }) => {
  const json = (response: { type: string; text: string }, status = 200) =>
    new Response(JSON.stringify(response), {
      status,
      headers: { 'Content-Type': 'application/json' },
    });

  try {
    const body: ContactBody = await request.json();

    // Honeypot check
    if (body.website) {
      return json({
        type: 'success',
        text: "Thank you! Your message has been sent. We'll get back to you shortly.",
      });
    }

    // Sanitize
    const name = (body.name ?? '').trim().replace(/[\r\n]/g, '');
    const email = (body.email ?? '').trim().replace(/[\r\n]/g, '');
    const message = (body.message ?? '').trim();

    // Required fields
    if (!name || !email || !message) {
      return json(
        { type: 'error', text: 'Please fill in all required fields.' },
        400,
      );
    }

    // Length limits
    if (name.length > 100 || email.length > 254 || message.length > 5000) {
      return json(
        {
          type: 'error',
          text: 'One or more fields exceed the maximum allowed length.',
        },
        400,
      );
    }

    // Email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return json(
        { type: 'error', text: 'Please enter a valid email address.' },
        400,
      );
    }

    // Send email via Resend (or other provider)
    // Configure RESEND_API_KEY in Cloudflare Pages environment variables
    const apiKey = import.meta.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error('RESEND_API_KEY not configured');
      return json(
        {
          type: 'error',
          text: 'Sorry, there was an error sending your message. Please try again or call us directly.',
        },
        500,
      );
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'JCustom Website <noreply@jcustomdeckandpatio.com>',
        to: ['inquire@jcustomlands.com'],
        reply_to: email,
        subject: `New Inquiry from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      }),
    });

    if (!res.ok) {
      const errorBody = await res.text();
      console.error('Resend error:', res.status, errorBody);
      return json(
        {
          type: 'error',
          text: 'Sorry, there was an error sending your message. Please try again or call us directly.',
        },
        500,
      );
    }

    return json({
      type: 'success',
      text: "Thank you! Your message has been sent. We'll get back to you shortly.",
    });
  } catch (err) {
    console.error('Contact form error:', err);
    return json(
      {
        type: 'error',
        text: 'Sorry, there was an error sending your message. Please try again or call us directly.',
      },
      500,
    );
  }
};
