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
    intro: `JCustom Deck and Patio designs and builds exceptional ${shortTitle.toLowerCase()} for homeowners in ${cityName} and throughout ${city.county} County. With over 20 years of experience across the DFW metroplex, we combine expert craftsmanship with premium materials to create outdoor spaces you'll enjoy for years to come.`,
    localDetails: `From initial design consultation through final installation, our team manages every detail of your ${shortTitle.toLowerCase()} project. We use high-quality materials built to withstand North Texas weather and back every project with our satisfaction guarantee. Whether you're planning a complete backyard transformation or a focused upgrade, we'll work with you to create the right solution for your home in ${cityName}.`,
    metaTitle: `${shortTitle} in ${cityName}, ${state} | JCustom Deck and Patio`,
    metaDescription: `Professional ${shortTitle.toLowerCase()} in ${cityName}, TX. Custom design & expert installation by JCustom Deck and Patio. Serving DFW since 2005. Free consultation!`,
  };
}
