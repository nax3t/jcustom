export interface Testimonial {
  quote: string;
  author: string;
  stars: number;
  project: string;
  source: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'JCustom Deck and Patio did an exceptional job on our backyard transformation. The team was professional, detail-oriented, and completed the project on time. Our new deck is absolutely stunning and has become the favorite spot for our family gatherings.',
    author: 'Quinton Bock',
    stars: 5,
    project: 'Composite Deck',
    source: 'Google Review',
  },
  {
    quote:
      'From start to finish, the experience with JCustom was outstanding. They listened to exactly what we wanted and delivered beyond our expectations. The patio design is beautiful and the quality of workmanship is evident in every detail. Highly recommend!',
    author: 'Sarah M.',
    stars: 5,
    project: 'Patio & Pergola',
    source: 'Google Review',
  },
  {
    quote:
      "We hired JCustom Deck and Patio for our composite deck installation and couldn't be happier with the results. The crew was respectful, kept the workspace clean, and the finished product looks incredible. It's added so much value to our home and outdoor living experience.",
    author: 'David R.',
    stars: 5,
    project: 'Deck Installation',
    source: 'Nextdoor',
  },
];
