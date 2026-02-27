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
      'We design and build custom decks, patios, pergolas, outdoor kitchens, and fences for Fort Worth homeowners. From first consultation to final walkthrough, our team delivers expert craftsmanship backed by over 20 years of experience.',
    nearby: ['benbrook', 'arlington', 'north-richland-hills', 'crowley'],
  },
  {
    name: 'Dallas',
    slug: 'dallas',
    county: 'Dallas',
    state: 'TX',
    description:
      'Our team brings two decades of expertise to every Dallas outdoor living project. Whether you\'re planning a multi-level deck, a stone patio, or a complete backyard renovation, we handle the full process from design through installation.',
    nearby: ['irving', 'richardson', 'grand-prairie', 'cedar-hill'],
  },
  {
    name: 'Arlington',
    slug: 'arlington',
    county: 'Tarrant',
    state: 'TX',
    description:
      'JCustom Deck and Patio helps Arlington homeowners create outdoor spaces built for real life — from durable composite decks to fully equipped outdoor kitchens. Every project is custom-designed and professionally installed.',
    nearby: ['fort-worth', 'grand-prairie', 'mansfield', 'hurst'],
  },
  {
    name: 'Plano',
    slug: 'plano',
    county: 'Collin',
    state: 'TX',
    description:
      'We build premium outdoor living spaces for Plano homeowners who expect quality. Custom decks, patios, pergolas, and more — each project is designed around your property and built with materials that stand the test of time.',
    nearby: ['frisco', 'allen', 'richardson', 'mckinney'],
  },
  {
    name: 'Frisco',
    slug: 'frisco',
    county: 'Collin/Denton',
    state: 'TX',
    description:
      'From custom decks to outdoor kitchens, we help Frisco homeowners extend their living space beyond four walls. Our experienced team designs and builds outdoor environments tailored to your property and lifestyle.',
    nearby: ['plano', 'prosper', 'mckinney', 'allen'],
  },
  {
    name: 'McKinney',
    slug: 'mckinney',
    county: 'Collin',
    state: 'TX',
    description:
      'JCustom Deck and Patio delivers expert outdoor construction to McKinney homeowners. We build custom decks, patios, pergolas, fences, and more — all designed to complement your home and built to last.',
    nearby: ['frisco', 'allen', 'plano', 'prosper'],
  },
  {
    name: 'Denton',
    slug: 'denton',
    county: 'Denton',
    state: 'TX',
    description:
      'We bring professional outdoor living solutions to Denton homeowners. Our team designs and installs custom decks, covered patios, pergolas, and outdoor entertainment areas using premium materials and proven techniques.',
    nearby: ['flower-mound', 'lewisville', 'trophy-club', 'prosper'],
  },
  {
    name: 'Grand Prairie',
    slug: 'grand-prairie',
    county: 'Dallas/Tarrant',
    state: 'TX',
    description:
      'Our team serves Grand Prairie with custom outdoor living projects built to the highest standards. From composite decks and stone patios to pergolas and outdoor kitchens, we handle every detail.',
    nearby: ['arlington', 'dallas', 'irving', 'mansfield'],
  },
  {
    name: 'Irving',
    slug: 'irving',
    county: 'Dallas',
    state: 'TX',
    description:
      'JCustom Deck and Patio designs and builds outdoor spaces that Irving homeowners love to use. Custom decks, patios, fences, and more — all professionally installed with quality materials and expert craftsmanship.',
    nearby: ['dallas', 'grand-prairie', 'grapevine', 'carrollton'],
  },
  {
    name: 'Southlake',
    slug: 'southlake',
    county: 'Tarrant/Denton',
    state: 'TX',
    description:
      'We specialize in premium outdoor living construction for Southlake homeowners. From elegant pergolas and luxury patios to custom-designed outdoor kitchens, every project reflects the quality and attention to detail your property deserves.',
    nearby: ['colleyville', 'keller', 'grapevine', 'trophy-club'],
  },
  {
    name: 'Colleyville',
    slug: 'colleyville',
    county: 'Tarrant',
    state: 'TX',
    description:
      'Our team delivers custom outdoor living spaces crafted to match the character of Colleyville properties. We build decks, patios, pergolas, and outdoor entertainment areas with premium materials and meticulous attention to detail.',
    nearby: ['southlake', 'grapevine', 'keller', 'bedford'],
  },
  {
    name: 'Keller',
    slug: 'keller',
    county: 'Tarrant',
    state: 'TX',
    description:
      'JCustom Deck and Patio helps Keller families create the backyard they\'ve always wanted. We design and build custom decks, covered patios, pergolas, outdoor kitchens, and fences — each project tailored to your home.',
    nearby: ['southlake', 'colleyville', 'north-richland-hills', 'fort-worth'],
  },
  {
    name: 'Flower Mound',
    slug: 'flower-mound',
    county: 'Denton',
    state: 'TX',
    description:
      'We design and install custom outdoor living spaces for Flower Mound homeowners. From hardwood decks and stone patios to shade structures and outdoor kitchens, our team builds it right the first time.',
    nearby: ['lewisville', 'grapevine', 'trophy-club', 'denton'],
  },
  {
    name: 'Grapevine',
    slug: 'grapevine',
    county: 'Tarrant',
    state: 'TX',
    description:
      'Our experienced team brings expert outdoor craftsmanship to Grapevine homeowners. We build custom decks, patios, pergolas, and entertainment areas designed for years of enjoyment.',
    nearby: ['colleyville', 'southlake', 'irving', 'flower-mound'],
  },
  {
    name: 'Trophy Club',
    slug: 'trophy-club',
    county: 'Denton',
    state: 'TX',
    description:
      'JCustom Deck and Patio serves Trophy Club with custom-designed outdoor living spaces. From elevated decks and shaded pergolas to fully equipped outdoor kitchens, we build environments made for relaxing and entertaining.',
    nearby: ['southlake', 'flower-mound', 'denton', 'keller'],
  },
  {
    name: 'Prosper',
    slug: 'prosper',
    county: 'Collin/Denton',
    state: 'TX',
    description:
      'We help Prosper homeowners complete their outdoor vision with custom-built decks, patios, pergolas, and more. Every project is designed to integrate with your home\'s architecture and built with premium materials.',
    nearby: ['frisco', 'mckinney', 'denton', 'flower-mound'],
  },
  {
    name: 'Allen',
    slug: 'allen',
    county: 'Collin',
    state: 'TX',
    description:
      'Our team delivers professional outdoor living construction to Allen homeowners. We handle everything from custom deck design and patio installation to pergolas, outdoor kitchens, and fences.',
    nearby: ['plano', 'mckinney', 'frisco', 'richardson'],
  },
  {
    name: 'Carrollton',
    slug: 'carrollton',
    county: 'Dallas/Denton',
    state: 'TX',
    description:
      'JCustom Deck and Patio builds custom outdoor spaces that add lasting value to Carrollton homes. Decks, patios, pergolas, outdoor kitchens, and fences — expertly designed and professionally installed.',
    nearby: ['irving', 'lewisville', 'plano', 'richardson'],
  },
  {
    name: 'Lewisville',
    slug: 'lewisville',
    county: 'Denton',
    state: 'TX',
    description:
      'We bring over 20 years of outdoor living expertise to Lewisville homeowners. Our team designs and builds custom decks, patios, pergolas, and outdoor entertainment areas from the ground up.',
    nearby: ['flower-mound', 'carrollton', 'denton', 'irving'],
  },
  {
    name: 'Richardson',
    slug: 'richardson',
    county: 'Dallas/Collin',
    state: 'TX',
    description:
      'Our team serves Richardson homeowners with custom outdoor living projects built to last. From composite decks and stone patios to outdoor kitchens and shade structures, we deliver expert results on every build.',
    nearby: ['plano', 'dallas', 'allen', 'carrollton'],
  },
  {
    name: 'Mansfield',
    slug: 'mansfield',
    county: 'Tarrant',
    state: 'TX',
    description:
      'JCustom Deck and Patio designs and builds outdoor living spaces that Mansfield families use every day. Custom decks, patios, pergolas, and more — built with quality materials and backed by decades of experience.',
    nearby: ['arlington', 'burleson', 'grand-prairie', 'fort-worth'],
  },
  {
    name: 'Burleson',
    slug: 'burleson',
    county: 'Johnson/Tarrant',
    state: 'TX',
    description:
      'We help Burleson homeowners make the most of their outdoor space with custom-built decks, patios, pergolas, and outdoor kitchens. Every project is designed to fit your property and built to withstand the elements.',
    nearby: ['mansfield', 'crowley', 'fort-worth', 'aledo'],
  },
  {
    name: 'Weatherford',
    slug: 'weatherford',
    county: 'Parker',
    state: 'TX',
    description:
      'Our team brings professional outdoor construction to Weatherford homeowners. We design and build custom decks, patios, pergolas, outdoor kitchens, and fences — all tailored to your property and lifestyle.',
    nearby: ['aledo', 'fort-worth', 'granbury', 'benbrook'],
  },
  {
    name: 'North Richland Hills',
    slug: 'north-richland-hills',
    county: 'Tarrant',
    state: 'TX',
    description:
      'JCustom Deck and Patio delivers quality outdoor living projects to North Richland Hills homeowners. From custom decks and covered patios to pergolas and fence installations, we build spaces designed for everyday enjoyment.',
    nearby: ['keller', 'hurst', 'fort-worth', 'bedford'],
  },
  {
    name: 'Hurst',
    slug: 'hurst',
    county: 'Tarrant',
    state: 'TX',
    description:
      'We build custom outdoor living spaces for Hurst homeowners who want quality craftsmanship. Decks, patios, pergolas, outdoor kitchens, and fences — each project is designed to enhance your home and built to last.',
    nearby: ['euless', 'bedford', 'north-richland-hills', 'arlington'],
  },
  {
    name: 'Euless',
    slug: 'euless',
    county: 'Tarrant',
    state: 'TX',
    description:
      'Our experienced team helps Euless homeowners create functional, beautiful outdoor spaces. We design and install custom decks, patios, shade structures, and outdoor entertainment areas using premium materials.',
    nearby: ['hurst', 'bedford', 'grapevine', 'irving'],
  },
  {
    name: 'Bedford',
    slug: 'bedford',
    county: 'Tarrant',
    state: 'TX',
    description:
      'JCustom Deck and Patio serves Bedford homeowners with custom outdoor living construction. From deck builds and patio installations to pergolas and outdoor kitchens, we handle every phase of your project.',
    nearby: ['hurst', 'euless', 'colleyville', 'north-richland-hills'],
  },
  {
    name: 'Crowley',
    slug: 'crowley',
    county: 'Tarrant',
    state: 'TX',
    description:
      'We bring expert craftsmanship and premium materials to every outdoor project in Crowley. Custom decks, patios, pergolas, fences, and more — designed around your home and built to stand the test of time.',
    nearby: ['fort-worth', 'burleson', 'mansfield', 'benbrook'],
  },
  {
    name: 'Aledo',
    slug: 'aledo',
    county: 'Parker',
    state: 'TX',
    description:
      'Our team designs and builds premium outdoor living spaces for Aledo homeowners. From expansive decks and covered patios to outdoor kitchens and custom fences, we deliver craftsmanship that matches your standards.',
    nearby: ['weatherford', 'fort-worth', 'benbrook', 'granbury'],
  },
  {
    name: 'Granbury',
    slug: 'granbury',
    county: 'Hood',
    state: 'TX',
    description:
      'JCustom Deck and Patio helps Granbury homeowners create outdoor spaces perfect for relaxing and entertaining. We build custom decks, patios, pergolas, and outdoor kitchens with expert precision and quality materials.',
    nearby: ['weatherford', 'aledo', 'burleson', 'benbrook'],
  },
  {
    name: 'Cedar Hill',
    slug: 'cedar-hill',
    county: 'Dallas',
    state: 'TX',
    description:
      'We design and install custom outdoor living spaces for Cedar Hill homeowners. Decks, patios, pergolas, outdoor kitchens, and fences — every project is built with expert craftsmanship and premium materials.',
    nearby: ['dallas', 'grand-prairie', 'mansfield', 'arlington'],
  },
  {
    name: 'Benbrook',
    slug: 'benbrook',
    county: 'Tarrant',
    state: 'TX',
    description:
      'Home to our headquarters, Benbrook is where JCustom Deck and Patio was founded. We build custom decks, patios, pergolas, outdoor kitchens, and fences for our neighbors with the same care we put into our own homes.',
    nearby: ['fort-worth', 'crowley', 'aledo', 'weatherford'],
  },
];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}
