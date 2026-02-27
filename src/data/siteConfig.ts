export const siteConfig = {
  name: 'JCustom Deck and Patio',
  tagline: 'Design. Build. Outdoors.',
  phone: '(817) 909-0973',
  phoneHref: 'tel:+18179090973',
  email: 'inquire@jcustomlands.com',
  address: {
    street: '7355 W Vickery Blvd #1B',
    city: 'Benbrook',
    state: 'TX',
    zip: '76116',
  },
  mapUrl: 'https://maps.app.goo.gl/NAnMySyVDWKXn9Jb9',
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3357.557399294239!2d-97.44207039999999!3d32.69781319999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e0d4a4afaaaab%3A0xfc52d457050c5ab7!2s7355%20W%20Vickery%20Blvd%20%231b%2C%20Benbrook%2C%20TX%2076116!5e0!3m2!1sen!2sus!4v1724974713076!5m2!1sen!2sus',
  url: 'https://jcustomdeckandpatio.com',
  social: {
    facebook: 'https://www.facebook.com/JCustomLands',
    instagram: 'https://www.instagram.com/jcustomlands',
  },
  foundingDate: '2005',
  geo: {
    latitude: 32.697813,
    longitude: -97.44207,
  },
  seo: {
    title:
      'Custom Decks & Patios in Dallas-Fort Worth | JCustom Deck and Patio',
    description:
      "Luxury custom decks, patios, pergolas & outdoor kitchens in Dallas-Fort Worth. Serving DFW since 2005. Free consultation: (817) 909-0973.",
  },
} as const;

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#showcase' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
] as const;
