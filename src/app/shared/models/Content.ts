import { Review } from './Review';

export interface Content {
  id: number;
  title: string;
  image: string;
  description: string;
  category: string;
  year: number;
  rating: number;
  duration: string;
  director: string;
  cast: string[];
  reviews?: Review[];
}