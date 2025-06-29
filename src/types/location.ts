export interface Location {
  id: string;
  name: string;
  state: string;
  phone: string;
  email: string;
  address: string;
  marketSize: string;
  avgGrowth: string;
  clientCount: number;
}

export interface ServicePackage {
  name: string;
  price: string;
  duration: string;
  features: string[];
  popular?: boolean;
}

export interface Testimonial {
  name: string;
  company: string;
  location: string;
  content: string;
  results: string;
  avatar: string;
}