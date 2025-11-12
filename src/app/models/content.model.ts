export interface Content {
  id: string;
  title: string;
  type: 'movie' | 'series';
  description: string;
  synopsis: string;
  releaseYear: number;
  duration: number;
  categoryId: string;
  director: string;
  cast: string[];
  rating: string;
  thumbnail: string;
  banner: string;
  featured: boolean;
  views: number;
  likes: number;
  imdbRating: number;
}