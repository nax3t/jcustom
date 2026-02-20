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
 * Phase 2 will bulk-generate AI content to populate this map.
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

function generateFallbackContent(
  city: City,
  service: Service,
): CityServiceContent {
  const { name: cityName, state } = city;
  const { title: serviceTitle, shortTitle, description: serviceDesc } = service;

  return {
    headline: `${serviceTitle} in ${cityName}, ${state}`,
    intro: `Looking for professional ${shortTitle.toLowerCase()} in ${cityName}? JCustom Deck and Patio brings over 20 years of experience building premium outdoor living spaces for homeowners across the Dallas-Fort Worth metroplex. We proudly serve ${cityName} and surrounding ${city.county} County communities.`,
    localDetails: `${cityName} homeowners enjoy a long outdoor season thanks to the North Texas climate. ${city.description} Our team understands the local building codes and HOA requirements in ${cityName}, ensuring your project is completed to the highest standards.`,
    metaTitle: `${shortTitle} in ${cityName}, ${state} | JCustom Deck and Patio`,
    metaDescription: `Professional ${shortTitle.toLowerCase()} in ${cityName}, TX. Custom design & expert installation by JCustom Deck and Patio. Serving DFW since 2005. Free consultation!`,
  };
}
