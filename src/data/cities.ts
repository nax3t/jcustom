export interface City {
  name: string;
  slug: string;
  county: string;
  state: string;
  description: string;
  nearby: string[];
}

export const cities: City[] = [
  {
    name: 'Fort Worth',
    slug: 'fort-worth',
    county: 'Tarrant',
    state: 'TX',
    description:
      'As the heart of Tarrant County, Fort Worth blends Western heritage with modern living. Its warm climate and spacious properties make it ideal for outdoor living spaces.',
    nearby: ['benbrook', 'arlington', 'north-richland-hills', 'crowley'],
  },
  {
    name: 'Dallas',
    slug: 'dallas',
    county: 'Dallas',
    state: 'TX',
    description:
      'Dallas homeowners enjoy long outdoor seasons and a vibrant lifestyle that extends into beautifully designed backyards and entertainment areas.',
    nearby: ['irving', 'richardson', 'grand-prairie', 'cedar-hill'],
  },
  {
    name: 'Arlington',
    slug: 'arlington',
    county: 'Tarrant',
    state: 'TX',
    description:
      'Centrally located between Dallas and Fort Worth, Arlington is home to families who love entertaining outdoors in their spacious suburban backyards.',
    nearby: ['fort-worth', 'grand-prairie', 'mansfield', 'hurst'],
  },
  {
    name: 'Plano',
    slug: 'plano',
    county: 'Collin',
    state: 'TX',
    description:
      'Plano is known for its upscale neighborhoods and well-maintained properties, where custom outdoor living spaces add significant value to homes.',
    nearby: ['frisco', 'allen', 'richardson', 'mckinney'],
  },
  {
    name: 'Frisco',
    slug: 'frisco',
    county: 'Collin/Denton',
    state: 'TX',
    description:
      'One of the fastest-growing cities in America, Frisco features newer homes and communities where homeowners invest in premium outdoor spaces.',
    nearby: ['plano', 'prosper', 'mckinney', 'allen'],
  },
  {
    name: 'McKinney',
    slug: 'mckinney',
    county: 'Collin',
    state: 'TX',
    description:
      'McKinney combines historic charm with new development, and its growing neighborhoods are perfect for custom decks, patios, and outdoor kitchens.',
    nearby: ['frisco', 'allen', 'plano', 'prosper'],
  },
  {
    name: 'Denton',
    slug: 'denton',
    county: 'Denton',
    state: 'TX',
    description:
      'A vibrant college town with a growing residential base, Denton homeowners appreciate quality outdoor living that complements the area\'s creative spirit.',
    nearby: ['flower-mound', 'lewisville', 'trophy-club', 'prosper'],
  },
  {
    name: 'Grand Prairie',
    slug: 'grand-prairie',
    county: 'Dallas/Tarrant',
    state: 'TX',
    description:
      'Grand Prairie sits between Dallas and Fort Worth, offering affordable homes with generous lot sizes perfect for custom outdoor improvements.',
    nearby: ['arlington', 'dallas', 'irving', 'mansfield'],
  },
  {
    name: 'Irving',
    slug: 'irving',
    county: 'Dallas',
    state: 'TX',
    description:
      'Irving\'s diverse neighborhoods range from established homes to newer developments, all benefiting from well-designed outdoor living spaces.',
    nearby: ['dallas', 'grand-prairie', 'grapevine', 'carrollton'],
  },
  {
    name: 'Southlake',
    slug: 'southlake',
    county: 'Tarrant/Denton',
    state: 'TX',
    description:
      'One of the most affluent communities in DFW, Southlake homeowners expect premium craftsmanship in their luxury outdoor living environments.',
    nearby: ['colleyville', 'keller', 'grapevine', 'trophy-club'],
  },
  {
    name: 'Colleyville',
    slug: 'colleyville',
    county: 'Tarrant',
    state: 'TX',
    description:
      'Colleyville\'s tree-lined streets and estate-size lots provide the perfect canvas for custom outdoor spaces with pools, kitchens, and entertainment areas.',
    nearby: ['southlake', 'grapevine', 'keller', 'bedford'],
  },
  {
    name: 'Keller',
    slug: 'keller',
    county: 'Tarrant',
    state: 'TX',
    description:
      'A family-friendly community with excellent schools, Keller residents love creating backyard retreats for year-round outdoor enjoyment.',
    nearby: ['southlake', 'colleyville', 'north-richland-hills', 'fort-worth'],
  },
  {
    name: 'Flower Mound',
    slug: 'flower-mound',
    county: 'Denton',
    state: 'TX',
    description:
      'Flower Mound\'s scenic landscape and upscale neighborhoods make it a prime location for custom pergolas, patios, and outdoor entertainment areas.',
    nearby: ['lewisville', 'grapevine', 'trophy-club', 'denton'],
  },
  {
    name: 'Grapevine',
    slug: 'grapevine',
    county: 'Tarrant',
    state: 'TX',
    description:
      'Known for its charming downtown and wine culture, Grapevine homeowners appreciate outdoor spaces designed for relaxation and entertaining.',
    nearby: ['colleyville', 'southlake', 'irving', 'flower-mound'],
  },
  {
    name: 'Trophy Club',
    slug: 'trophy-club',
    county: 'Denton',
    state: 'TX',
    description:
      'This master-planned community features homes with generous outdoor spaces, ideal for custom decks, pergolas, and resort-style backyards.',
    nearby: ['southlake', 'flower-mound', 'denton', 'keller'],
  },
  {
    name: 'Prosper',
    slug: 'prosper',
    county: 'Collin/Denton',
    state: 'TX',
    description:
      'Prosper is one of DFW\'s fastest-growing luxury communities, with new-construction homes that benefit from premium outdoor living additions.',
    nearby: ['frisco', 'mckinney', 'denton', 'flower-mound'],
  },
  {
    name: 'Allen',
    slug: 'allen',
    county: 'Collin',
    state: 'TX',
    description:
      'Allen offers a blend of established and new neighborhoods where families invest in quality outdoor spaces for entertaining and relaxation.',
    nearby: ['plano', 'mckinney', 'frisco', 'richardson'],
  },
  {
    name: 'Carrollton',
    slug: 'carrollton',
    county: 'Dallas/Denton',
    state: 'TX',
    description:
      'Carrollton\'s central location and diverse housing stock make it a great market for deck, patio, and fence upgrades that enhance property value.',
    nearby: ['irving', 'lewisville', 'plano', 'richardson'],
  },
  {
    name: 'Lewisville',
    slug: 'lewisville',
    county: 'Denton',
    state: 'TX',
    description:
      'Near Lewisville Lake, homeowners here love outdoor living spaces that take advantage of the area\'s natural beauty and warm Texas weather.',
    nearby: ['flower-mound', 'carrollton', 'denton', 'irving'],
  },
  {
    name: 'Richardson',
    slug: 'richardson',
    county: 'Dallas/Collin',
    state: 'TX',
    description:
      'Richardson\'s established neighborhoods and tech-corridor professionals appreciate well-crafted outdoor improvements that add lasting value.',
    nearby: ['plano', 'dallas', 'allen', 'carrollton'],
  },
  {
    name: 'Mansfield',
    slug: 'mansfield',
    county: 'Tarrant',
    state: 'TX',
    description:
      'Mansfield\'s growing community and spacious lots provide excellent opportunities for custom outdoor living spaces and backyard transformations.',
    nearby: ['arlington', 'burleson', 'grand-prairie', 'fort-worth'],
  },
  {
    name: 'Burleson',
    slug: 'burleson',
    county: 'Johnson/Tarrant',
    state: 'TX',
    description:
      'South of Fort Worth, Burleson offers a small-town feel with larger properties perfect for expansive decks, patios, and outdoor entertainment.',
    nearby: ['mansfield', 'crowley', 'fort-worth', 'aledo'],
  },
  {
    name: 'Weatherford',
    slug: 'weatherford',
    county: 'Parker',
    state: 'TX',
    description:
      'The seat of Parker County, Weatherford\'s rural estates and growing subdivisions are ideal for custom outdoor living projects.',
    nearby: ['aledo', 'fort-worth', 'granbury', 'benbrook'],
  },
  {
    name: 'North Richland Hills',
    slug: 'north-richland-hills',
    county: 'Tarrant',
    state: 'TX',
    description:
      'North Richland Hills is a well-established mid-cities community where homeowners enhance their properties with quality outdoor living spaces.',
    nearby: ['keller', 'hurst', 'fort-worth', 'bedford'],
  },
  {
    name: 'Hurst',
    slug: 'hurst',
    county: 'Tarrant',
    state: 'TX',
    description:
      'Part of the HEB community, Hurst offers convenient mid-cities living with homes that benefit from custom deck and patio additions.',
    nearby: ['euless', 'bedford', 'north-richland-hills', 'arlington'],
  },
  {
    name: 'Euless',
    slug: 'euless',
    county: 'Tarrant',
    state: 'TX',
    description:
      'Centrally located in the mid-cities, Euless homeowners appreciate outdoor improvements that maximize their property\'s potential.',
    nearby: ['hurst', 'bedford', 'grapevine', 'irving'],
  },
  {
    name: 'Bedford',
    slug: 'bedford',
    county: 'Tarrant',
    state: 'TX',
    description:
      'Bedford completes the HEB triangle with mature neighborhoods ready for outdoor living upgrades including decks, patios, and pergolas.',
    nearby: ['hurst', 'euless', 'colleyville', 'north-richland-hills'],
  },
  {
    name: 'Crowley',
    slug: 'crowley',
    county: 'Tarrant',
    state: 'TX',
    description:
      'Just south of Fort Worth, Crowley is a growing community where families are investing in custom outdoor living spaces.',
    nearby: ['fort-worth', 'burleson', 'mansfield', 'benbrook'],
  },
  {
    name: 'Aledo',
    slug: 'aledo',
    county: 'Parker',
    state: 'TX',
    description:
      'Aledo\'s rural charm and growing luxury home market make it perfect for premium outdoor living projects with expansive designs.',
    nearby: ['weatherford', 'fort-worth', 'benbrook', 'granbury'],
  },
  {
    name: 'Granbury',
    slug: 'granbury',
    county: 'Hood',
    state: 'TX',
    description:
      'A lakeside community southwest of Fort Worth, Granbury homeowners love outdoor spaces that embrace the area\'s scenic waterfront lifestyle.',
    nearby: ['weatherford', 'aledo', 'burleson', 'benbrook'],
  },
  {
    name: 'Cedar Hill',
    slug: 'cedar-hill',
    county: 'Dallas',
    state: 'TX',
    description:
      'Cedar Hill\'s rolling terrain and nature preserves inspire outdoor living designs that blend seamlessly with the natural landscape.',
    nearby: ['dallas', 'grand-prairie', 'mansfield', 'arlington'],
  },
  {
    name: 'Benbrook',
    slug: 'benbrook',
    county: 'Tarrant',
    state: 'TX',
    description:
      'Home to our headquarters, Benbrook is where JCustom Deck and Patio was founded. We know this community inside and out.',
    nearby: ['fort-worth', 'crowley', 'aledo', 'weatherford'],
  },
];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}
