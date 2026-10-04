export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  category: string;
  surfaces: string[];
  ctaText: string;
}

export interface BenefitItem {
  icon: string;
  title: string;
  description: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
}

export interface TestimonialItem {
  author?: string;
  quote: string;
  rating: number;
  source: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  tag: string;
}
