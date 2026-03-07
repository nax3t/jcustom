import type { City } from './cities';
import type { Service } from './services';

export interface CityServiceContent {
  headline: string;
  intro: string;
  localDetails: string;
  metaTitle: string;
  metaDescription: string;
}

/**
 * Unique content per city+service permutation.
 * Key format: "{citySlug}--{serviceSlug}"
 */
export const cityServiceContent: Record<string, CityServiceContent> = {};

/**
 * Returns content for a city+service page, falling back to generated defaults.
 */
export function getCityServiceContent(
  city: City,
  service: Service,
): CityServiceContent {
  const key = `${city.slug}--${service.slug}`;
  if (cityServiceContent[key]) {
    return cityServiceContent[key];
  }
  return generateFallbackContent(city, service);
}

interface ServiceTemplate {
  intro: (cityName: string) => string;
  localDetails: (cityName: string) => string;
}

const serviceTemplates: Record<string, ServiceTemplate> = {
  'custom-decks': {
    intro: (cityName) =>
      `There's nothing like stepping outside with your morning coffee onto a deck that was designed around your home. We build custom decks in ${cityName} — composite, hardwood, multi-level — whatever fits your space and how you actually use it.`,
    localDetails: (cityName) =>
      `Every deck we build in ${cityName} starts with an on-site visit. We look at your yard, talk through what you want, and put together a design that works with your home's layout and the North Texas climate. We handle permits, material sourcing, and construction from start to finish.`,
  },
  patios: {
    intro: (cityName) =>
      `A well-built patio changes how you use your backyard. We design and install patios for ${cityName} homeowners using concrete pavers, natural stone, and stamped concrete — with covered options to make the space usable year-round.`,
    localDetails: (cityName) =>
      `Our patio projects in ${cityName} are built on properly graded and compacted bases, with drainage planned from day one. We work with you to choose materials that complement your home and hold up through Texas summers, heavy rain, and everything in between.`,
  },
  pergolas: {
    intro: (cityName) =>
      `The right shade structure makes your outdoor space usable even in July. We build custom pergolas in ${cityName} — from traditional cedar designs to modern louvered systems — that add both function and style to your backyard.`,
    localDetails: (cityName) =>
      `Whether you're looking for a freestanding pergola over your patio or an attached structure off the back of the house, we'll design something that fits. Our pergola builds in ${cityName} include proper footings, engineered connections, and finishes that stand up to the Texas sun.`,
  },
  'water-features': {
    intro: (cityName) =>
      `Water has a way of making a backyard feel like a completely different place. We design and build pools, spas, and water features for ${cityName} homes that turn your yard into somewhere you actually want to spend time.`,
    localDetails: (cityName) =>
      `From custom pool surrounds and spillover spas to standalone water walls, our projects in ${cityName} are designed to integrate with your landscape. We coordinate plumbing, electrical, and hardscaping so everything works together and looks like it belongs.`,
  },
  'outdoor-kitchens': {
    intro: (cityName) =>
      `Once you cook outside on a real outdoor kitchen, it's hard to go back inside. We build fully equipped outdoor kitchens for ${cityName} homeowners — built-in grills, countertops, sinks, refrigeration, and seating areas designed around how you entertain.`,
    localDetails: (cityName) =>
      `Our outdoor kitchens in ${cityName} are built with weather-resistant materials and proper gas, water, and electrical connections. We work with you on the layout so everything is within reach, and the finished space feels like a natural extension of your home.`,
  },
  fences: {
    intro: (cityName) =>
      `A good fence does more than mark your property line — it defines your space and gives you privacy where you need it. We build custom fences in ${cityName} that look great from both sides and are built to handle wind, weather, and time.`,
    localDetails: (cityName) =>
      `We install wood, composite, and metal fences throughout ${cityName}. Every project starts with a property survey and a conversation about what you need — privacy, security, aesthetics, or all three. We set deep posts, use quality hardware, and build to last.`,
  },
};

function generateFallbackContent(
  city: City,
  service: Service,
): CityServiceContent {
  const { name: cityName, county } = city;
  const { shortTitle, slug } = service;

  const template = serviceTemplates[slug];
  const intro = template
    ? template.intro(cityName)
    : `JCustom Deck and Patio designs and builds ${shortTitle.toLowerCase()} for homeowners in ${cityName} and throughout ${county} County. We handle every step from design to installation.`;
  const localDetails = template
    ? template.localDetails(cityName)
    : `From the first consultation through final walkthrough, our team manages every detail of your ${shortTitle.toLowerCase()} project in ${cityName}. We use materials built for North Texas weather and back every build with our workmanship guarantee.`;

  return {
    headline: `${shortTitle} Built for ${cityName} Homes`,
    intro,
    localDetails,
    metaTitle: `${shortTitle} in ${cityName}, TX | JCustom Deck and Patio`,
    metaDescription: `Professional ${shortTitle.toLowerCase()} in ${cityName}, TX. Custom design & installation by JCustom Deck and Patio. Serving ${county} County since 2005. Call (817) 909-0973.`,
  };
}
