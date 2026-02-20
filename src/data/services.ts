export interface Service {
  title: string;
  slug: string;
  shortTitle: string;
  description: string;
  icon: string;
  iconAlt: string;
}

export const services: Service[] = [
  {
    title: 'Custom Decks & Terraces',
    slug: 'custom-decks',
    shortTitle: 'Custom Decks',
    description:
      "Transform your outdoor space with bespoke decks and terraces in composite or hardwood, built to handle North Texas heat, storms, and sun. Our designs blend seamlessly with your home's architecture, creating stunning elevated living areas.",
    icon: 'deck.svg',
    iconAlt:
      'SVG of a beautiful hardwood deck with railing and furniture',
  },
  {
    title: 'Luxury Patios & Outdoor Living',
    slug: 'patios',
    shortTitle: 'Patios',
    description:
      'Experience the epitome of outdoor comfort with patios built from concrete pavers, natural stone, or stamped concrete. Add a covered structure to beat the Texas summer heat and enjoy your outdoor living space year-round.',
    icon: 'patio.svg',
    iconAlt:
      'SVG of a beautiful outdoor patio with chairs and a firepit',
  },
  {
    title: 'Pergolas & Shade Structures',
    slug: 'pergolas',
    shortTitle: 'Pergolas',
    description:
      "Add elegance and functionality with custom pergolas in cedar, aluminum, or louvered designs. Our shade structures provide the perfect balance of sun and shade while enhancing your landscape's visual appeal.",
    icon: 'pergola.svg',
    iconAlt:
      'SVG of a gorgeous wooden pergola covered in grapevines',
  },
  {
    title: 'Water Features & Pool Surrounds',
    slug: 'water-features',
    shortTitle: 'Water Features',
    description:
      'Elevate your outdoor oasis with custom pools, spas, and captivating water elements. Our designs integrate seamlessly with your landscape, creating a luxurious retreat in your own backyard.',
    icon: 'pool.svg',
    iconAlt:
      'SVG of a custom backyard pool with waterfall feature and accompanying spa',
  },
  {
    title: 'Outdoor Kitchens & Entertainment',
    slug: 'outdoor-kitchens',
    shortTitle: 'Outdoor Kitchens',
    description:
      'Bring the heart of your home outside with fully-equipped outdoor kitchens and entertainment spaces. From built-in grills to cozy fire pits, we design areas perfect for gathering and making memories.',
    icon: 'outdoor-kitchen.svg',
    iconAlt:
      'SVG of a custom outdoor kitchen with a built-in grill and seating area',
  },
  {
    title: 'Fence & Boundary Solutions',
    slug: 'fences',
    shortTitle: 'Fences',
    description:
      'Enhance your property with a custom fence solution that blends privacy and aesthetic. From elegant garden boundaries to robust perimeters, we design fences that complement your landscape and define your personal sanctuary.',
    icon: 'fence.svg',
    iconAlt:
      'SVG of a high quality fence surrounding a beautiful backyard and garden',
  },
];
