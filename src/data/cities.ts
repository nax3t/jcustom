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
      'Fort Worth backyards deserve more than a patch of grass and a folding chair. We build decks, patios, pergolas, and outdoor kitchens that turn your yard into the best room in the house.',
    nearby: ['benbrook', 'arlington', 'north-richland-hills', 'crowley'],
  },
  {
    name: 'Dallas',
    slug: 'dallas',
    county: 'Dallas',
    state: 'TX',
    description:
      'Whether it\'s a multi-level deck for entertaining or a quiet patio retreat, we help Dallas homeowners make the most of their outdoor space. Two decades of building across DFW.',
    nearby: ['irving', 'richardson', 'grand-prairie', 'cedar-hill'],
  },
  {
    name: 'Arlington',
    slug: 'arlington',
    county: 'Tarrant',
    state: 'TX',
    description:
      'Arlington homeowners trust us to build outdoor spaces designed for real life — weekend cookouts, quiet evenings, kids running around. Every project is custom-designed to fit your property.',
    nearby: ['fort-worth', 'grand-prairie', 'mansfield', 'hurst'],
  },
  {
    name: 'Plano',
    slug: 'plano',
    county: 'Collin',
    state: 'TX',
    description:
      'Plano properties have the space for something special. We design and build custom decks, covered patios, and outdoor kitchens that add real value to your home and your daily life.',
    nearby: ['frisco', 'allen', 'richardson', 'mckinney'],
  },
  {
    name: 'Frisco',
    slug: 'frisco',
    county: 'Collin/Denton',
    state: 'TX',
    description:
      'Frisco is growing fast, and new homes need outdoor spaces that match what\'s inside. We build everything from composite decks to full backyard transformations for Frisco families.',
    nearby: ['plano', 'prosper', 'mckinney', 'allen'],
  },
  {
    name: 'McKinney',
    slug: 'mckinney',
    county: 'Collin',
    state: 'TX',
    description:
      'McKinney\'s mix of historic charm and new construction gives us interesting projects. Custom pergolas for older homes, modern decks for new builds — we tailor every design to the property.',
    nearby: ['frisco', 'allen', 'plano', 'prosper'],
  },
  {
    name: 'Denton',
    slug: 'denton',
    county: 'Denton',
    state: 'TX',
    description:
      'From covered patios that handle the summer heat to pergolas that frame the sunset, we help Denton homeowners build outdoor spaces they\'ll actually use all year.',
    nearby: ['flower-mound', 'lewisville', 'trophy-club', 'prosper'],
  },
  {
    name: 'Grand Prairie',
    slug: 'grand-prairie',
    county: 'Dallas/Tarrant',
    state: 'TX',
    description:
      'Grand Prairie sits right between Dallas and Fort Worth, and we\'ve built all across it. Decks, patios, fences, outdoor kitchens — whatever your backyard needs.',
    nearby: ['arlington', 'dallas', 'irving', 'mansfield'],
  },
  {
    name: 'Irving',
    slug: 'irving',
    county: 'Dallas',
    state: 'TX',
    description:
      'Irving homeowners call us for outdoor projects that are built to last — composite decks that don\'t splinter, stone patios that drain properly, and fences that still look good years from now.',
    nearby: ['dallas', 'grand-prairie', 'grapevine', 'carrollton'],
  },
  {
    name: 'Southlake',
    slug: 'southlake',
    county: 'Tarrant/Denton',
    state: 'TX',
    description:
      'Southlake homes set a high bar, and our work meets it. We build pergolas, patios, and outdoor kitchens with the level of finish and detail that these properties demand.',
    nearby: ['colleyville', 'keller', 'grapevine', 'trophy-club'],
  },
  {
    name: 'Colleyville',
    slug: 'colleyville',
    county: 'Tarrant',
    state: 'TX',
    description:
      'The lots in Colleyville give us room to do something special. Custom-designed outdoor living spaces that match the character of the neighborhood and the way your family lives.',
    nearby: ['southlake', 'grapevine', 'keller', 'bedford'],
  },
  {
    name: 'Keller',
    slug: 'keller',
    county: 'Tarrant',
    state: 'TX',
    description:
      'Keller families know what they want — a backyard the whole family can enjoy. We build decks, covered patios, and outdoor kitchens designed around how you actually spend your time outside.',
    nearby: ['southlake', 'colleyville', 'north-richland-hills', 'fort-worth'],
  },
  {
    name: 'Flower Mound',
    slug: 'flower-mound',
    county: 'Denton',
    state: 'TX',
    description:
      'Flower Mound backyards have great bones — mature trees, good-sized lots, and room to build. We add custom decks, shade structures, and outdoor kitchens that make the most of the space.',
    nearby: ['lewisville', 'grapevine', 'trophy-club', 'denton'],
  },
  {
    name: 'Grapevine',
    slug: 'grapevine',
    county: 'Tarrant',
    state: 'TX',
    description:
      'Grapevine has some of the best entertaining weather in DFW. We build outdoor spaces — patios, pergolas, and decks — that let you take advantage of it almost year-round.',
    nearby: ['colleyville', 'southlake', 'irving', 'flower-mound'],
  },
  {
    name: 'Trophy Club',
    slug: 'trophy-club',
    county: 'Denton',
    state: 'TX',
    description:
      'Trophy Club homeowners enjoy their backyards. We build elevated decks, shaded pergolas, and outdoor kitchens that make it easy to spend more time outside with family and friends.',
    nearby: ['southlake', 'flower-mound', 'denton', 'keller'],
  },
  {
    name: 'Prosper',
    slug: 'prosper',
    county: 'Collin/Denton',
    state: 'TX',
    description:
      'New construction in Prosper often comes with a blank-slate backyard. We turn that empty space into a custom outdoor living area designed to match your home\'s style and your family\'s needs.',
    nearby: ['frisco', 'mckinney', 'denton', 'flower-mound'],
  },
  {
    name: 'Allen',
    slug: 'allen',
    county: 'Collin',
    state: 'TX',
    description:
      'Allen homeowners come to us when they\'re ready to invest in their backyard. Custom decks, patios, and pergolas built with materials that hold up to North Texas weather.',
    nearby: ['plano', 'mckinney', 'frisco', 'richardson'],
  },
  {
    name: 'Carrollton',
    slug: 'carrollton',
    county: 'Dallas/Denton',
    state: 'TX',
    description:
      'A well-built deck or patio adds lasting value to a Carrollton home. We design and install outdoor spaces that look great, function well, and hold up for years.',
    nearby: ['irving', 'lewisville', 'plano', 'richardson'],
  },
  {
    name: 'Lewisville',
    slug: 'lewisville',
    county: 'Denton',
    state: 'TX',
    description:
      'Lewisville homeowners looking to upgrade their backyard start with a conversation. Tell us what you have in mind — decks, patios, pergolas — and we\'ll build something you\'re proud of.',
    nearby: ['flower-mound', 'carrollton', 'denton', 'irving'],
  },
  {
    name: 'Richardson',
    slug: 'richardson',
    county: 'Dallas/Collin',
    state: 'TX',
    description:
      'Richardson\'s established neighborhoods have great potential for outdoor upgrades. We build decks, patios, and shade structures that complement what\'s already there.',
    nearby: ['plano', 'dallas', 'allen', 'carrollton'],
  },
  {
    name: 'Mansfield',
    slug: 'mansfield',
    county: 'Tarrant',
    state: 'TX',
    description:
      'Mansfield families use their backyards — and we build spaces to match. Custom decks for weekend grilling, covered patios for shade, and outdoor kitchens for the serious hosts.',
    nearby: ['arlington', 'burleson', 'grand-prairie', 'fort-worth'],
  },
  {
    name: 'Burleson',
    slug: 'burleson',
    county: 'Johnson/Tarrant',
    state: 'TX',
    description:
      'Burleson\'s larger lots give homeowners room to build something substantial. We design and construct custom outdoor living spaces that take full advantage of your property.',
    nearby: ['mansfield', 'crowley', 'fort-worth', 'aledo'],
  },
  {
    name: 'Weatherford',
    slug: 'weatherford',
    county: 'Parker',
    state: 'TX',
    description:
      'Out in Weatherford, people actually use their land. We build decks, patios, and outdoor kitchens designed for the way Parker County homeowners live — relaxed and outdoors.',
    nearby: ['aledo', 'fort-worth', 'granbury', 'benbrook'],
  },
  {
    name: 'North Richland Hills',
    slug: 'north-richland-hills',
    county: 'Tarrant',
    state: 'TX',
    description:
      'North Richland Hills homeowners get quality outdoor construction without the fuss. We show up on time, build it right, and leave you with a space your family will enjoy every day.',
    nearby: ['keller', 'hurst', 'fort-worth', 'bedford'],
  },
  {
    name: 'Hurst',
    slug: 'hurst',
    county: 'Tarrant',
    state: 'TX',
    description:
      'Even a mid-sized Hurst backyard can become something special. We design compact decks, efficient patios, and smart shade solutions that maximize your outdoor space.',
    nearby: ['euless', 'bedford', 'north-richland-hills', 'arlington'],
  },
  {
    name: 'Euless',
    slug: 'euless',
    county: 'Tarrant',
    state: 'TX',
    description:
      'Centrally located and easy to reach, Euless is right in our build zone. Custom patios, decks, and shade structures designed for your home and installed by our experienced crew.',
    nearby: ['hurst', 'bedford', 'grapevine', 'irving'],
  },
  {
    name: 'Bedford',
    slug: 'bedford',
    county: 'Tarrant',
    state: 'TX',
    description:
      'Bedford homeowners appreciate quality work that\'s done right. We build outdoor living spaces — decks, patios, pergolas — that hold up to daily use and North Texas weather.',
    nearby: ['hurst', 'euless', 'colleyville', 'north-richland-hills'],
  },
  {
    name: 'Crowley',
    slug: 'crowley',
    county: 'Tarrant',
    state: 'TX',
    description:
      'Crowley is close to home for us, and we\'ve built plenty of outdoor projects in the area. Decks, fences, patios — you name it. Quality materials, honest timelines, great results.',
    nearby: ['fort-worth', 'burleson', 'mansfield', 'benbrook'],
  },
  {
    name: 'Aledo',
    slug: 'aledo',
    county: 'Parker',
    state: 'TX',
    description:
      'Aledo properties have the space and the setting for impressive outdoor builds. Custom decks, covered patios, and outdoor kitchens crafted to match the quality of your home.',
    nearby: ['weatherford', 'fort-worth', 'benbrook', 'granbury'],
  },
  {
    name: 'Granbury',
    slug: 'granbury',
    county: 'Hood',
    state: 'TX',
    description:
      'Granbury living is all about enjoying the outdoors. We build decks, patios, and outdoor kitchens that make your backyard the perfect place to relax and host friends.',
    nearby: ['weatherford', 'aledo', 'burleson', 'benbrook'],
  },
  {
    name: 'Cedar Hill',
    slug: 'cedar-hill',
    county: 'Dallas',
    state: 'TX',
    description:
      'Cedar Hill\'s rolling terrain makes for interesting deck and patio projects. We design around slopes, trees, and views to create outdoor spaces that work with your property, not against it.',
    nearby: ['dallas', 'grand-prairie', 'mansfield', 'arlington'],
  },
  {
    name: 'Benbrook',
    slug: 'benbrook',
    county: 'Tarrant',
    state: 'TX',
    description:
      'Benbrook is home base — our headquarters is right here on Vickery Blvd. We build for our neighbors with the same care we put into our own homes. Decks, patios, pergolas, and more.',
    nearby: ['fort-worth', 'crowley', 'aledo', 'weatherford'],
  },
];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}
