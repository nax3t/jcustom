export interface ServiceImageSet {
  heroBg: string;
  feature1: string;
}

export const serviceImages: Record<string, ServiceImageSet> = {
  'custom-decks': {
    heroBg: '/images/hero/deck-hero.webp',
    feature1: '/images/features/deck-feature.webp',
  },
  patios: {
    heroBg: '/images/hero/patio-hero.webp',
    feature1: '/images/features/patio-feature.webp',
  },
  pergolas: {
    heroBg: '/images/hero/pergola-hero.webp',
    feature1: '/images/features/pergola-feature.webp',
  },
  'water-features': {
    heroBg: '/images/hero/water-features-hero.webp',
    feature1: '/images/features/water-features-feature.webp',
  },
  'outdoor-kitchens': {
    heroBg: '/images/hero/outdoor-kitchen-hero.webp',
    feature1: '/images/features/outdoor-kitchen-feature.webp',
  },
  fences: {
    heroBg: '/images/hero/fence-hero.webp',
    feature1: '/images/features/fence-feature.webp',
  },
};

export const cityHeroBg = '/images/hero/city-hero.webp';
