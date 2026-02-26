export interface PortfolioItem {
  title: string;
  category: string;
  categories: string[];
  image: string;
  alt: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Composite Deck Build',
    category: 'Decks',
    categories: ['decks'],
    image: 'composite-deck-2.webp',
    alt: 'Custom composite deck with clean lines and modern railing',
  },
  {
    title: 'Deck & Fence Combo',
    category: 'Decks & Fences',
    categories: ['decks', 'fences'],
    image: 'fence-deck-1-crop.webp',
    alt: 'Backyard deck with horizontal wooden fence and steel frame gate',
  },
  {
    title: 'Poolside Covered Patio',
    category: 'Patios',
    categories: ['patios'],
    image: 'covered-patio-overlooking-pool-and-outdoor-living-area.webp',
    alt: 'Covered patio overlooking pool and outdoor living area',
  },
  {
    title: 'Multi-Level Forever Deck',
    category: 'Decks',
    categories: ['decks'],
    image: 'Massive-Forever-Deck-4.webp',
    alt: 'Large multi-level composite deck with built-in seating',
  },
  {
    title: 'Cedar Privacy Fence',
    category: 'Fences',
    categories: ['fences'],
    image: 'cedar_fence_denver.webp',
    alt: 'Cedar privacy fence installation with clean horizontal boards',
  },
  {
    title: 'Backyard Deck Installation',
    category: 'Decks',
    categories: ['decks'],
    image: 'custom-decking-installation-for-backyard-outdoor-living.webp',
    alt: 'Custom decking installation for backyard outdoor living',
  },
  {
    title: 'Pergola & Paver Patio',
    category: 'Patios',
    categories: ['patios'],
    image: 'pergola-with-a-concrete-paver-through-the-area.webp',
    alt: 'Pergola with concrete paver walkway through outdoor area',
  },
  {
    title: 'Outdoor Kitchen Lounge',
    category: 'Patios',
    categories: ['patios'],
    image: 'outdoor-kitchen-and-relaxation-couch.webp',
    alt: 'Outdoor kitchen with relaxation area and couch seating',
  },
  {
    title: 'Open Wood Deck',
    category: 'Decks',
    categories: ['decks'],
    image: 'empty-open-wooden-deck-diagonal-shot.webp',
    alt: 'Open wooden deck with diagonal board pattern',
  },
  {
    title: 'Custom Pergola Retreat',
    category: 'Patios',
    categories: ['patios'],
    image: 'custom-pergola-retreat.webp',
    alt: 'Modern white pergola with outdoor grilling station and manicured lawn',
  },
  {
    title: 'Outdoor Kitchen & Bar',
    category: 'Decks & Patios',
    categories: ['decks', 'patios'],
    image: 'outdoor-kitchen-grill.webp',
    alt: 'Covered pergola with built-in grill, dining area, and fire pit at sunset',
  },
  {
    title: 'Pool Deck Surround',
    category: 'Decks',
    categories: ['decks'],
    image: 'pool-deck-surround.webp',
    alt: 'Residential pool with surrounding deck and patio area overlooking landscaped yard',
  },
  {
    title: 'Stamped Concrete Patio',
    category: 'Patios',
    categories: ['patios'],
    image: 'stamped-concrete-patio.webp',
    alt: 'Elegant paver patio with wicker dining furniture and symmetrical landscaping',
  },
  {
    title: 'Al Fresco Dining Terrace',
    category: 'Patios',
    categories: ['patios'],
    image: 'al-fresco-dining-terrace.webp',
    alt: 'Rustic outdoor dining table set on stone patio with wisteria and garden chairs',
  },
  {
    title: 'Elevated Deck Retreat',
    category: 'Decks',
    categories: ['decks'],
    image: 'IMG_0455-1.webp',
    alt: 'Elevated composite deck with railing and outdoor seating overlooking a landscaped yard',
  },
];

export const filterCategories = [
  { label: 'All', value: 'all' },
  { label: 'Decks', value: 'decks' },
  { label: 'Patios', value: 'patios' },
  { label: 'Fences', value: 'fences' },
] as const;

/** Map portfolio categories to service slugs for landing page filtering */
const categoryToServiceSlugs: Record<string, string[]> = {
  decks: ['custom-decks'],
  patios: ['patios', 'pergolas', 'outdoor-kitchens', 'water-features'],
  fences: ['fences'],
};

/** Get portfolio items that match a given service slug */
export function getPortfolioByService(serviceSlug: string): PortfolioItem[] {
  const matchingCategories = Object.entries(categoryToServiceSlugs)
    .filter(([, slugs]) => slugs.includes(serviceSlug))
    .map(([category]) => category);

  return portfolioItems.filter((item) =>
    item.categories.some((cat) => matchingCategories.includes(cat)),
  );
}
