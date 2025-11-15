// src/app/shared/config/image.config.ts

/**
 * SOLUÇÃO TEMPORÁRIA: Usando URLs externas do TMDB
 * Isso FUNCIONA 100% sem precisar configurar nada!
 */

export const CONTENT_IMAGES: { [key: string]: { thumbnail: string; banner: string } } = {
  '1': { // O Resgate Final
    thumbnail: 'https://image.tmdb.org/t/p/w500/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg',
    banner: 'https://image.tmdb.org/t/p/original/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg'
  },
  '2': { // Stranger Things
    thumbnail: 'https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg',
    banner: 'https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg'
  },
  '3': { // Amor em Paris
    thumbnail: 'https://image.tmdb.org/t/p/w500/cvcv2RWQPjEf9SoH6nKfFRINxzh.jpg',
    banner: 'https://image.tmdb.org/t/p/original/cvcv2RWQPjEf9SoH6nKfFRINxzh.jpg'
  },
  '4': { // The Office Brasil
    thumbnail: 'https://image.tmdb.org/t/p/w500/qWnJzyZhyy74gjpSjIXWmuk0ifX.jpg',
    banner: 'https://image.tmdb.org/t/p/original/qWnJzyZhyy74gjpSjIXWmuk0ifX.jpg'
  },
  '5': { // A Casa Assombrada
    thumbnail: 'https://image.tmdb.org/t/p/w500/iNqmVJCGcGKI3W5IQfRLxaInGvW.jpg',
    banner: 'https://image.tmdb.org/t/p/original/iNqmVJCGcGKI3W5IQfRLxaInGvW.jpg'
  },
  '6': { // Breaking Bad
    thumbnail: 'https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg',
    banner: 'https://image.tmdb.org/t/p/original/tsRy63Mu5cu8etL1X7ZLyf7UP1M.jpg'
  },
  '7': { // Planeta Terra
    thumbnail: 'https://image.tmdb.org/t/p/w500/mch8e7htc5nV0GJVhd5uTaAGP96.jpg',
    banner: 'https://image.tmdb.org/t/p/original/mch8e7htc5nV0GJVhd5uTaAGP96.jpg'
  },
  '8': { // Blade Runner 2099
    thumbnail: 'https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg',
    banner: 'https://image.tmdb.org/t/p/original/ilKE2RPuuhC59M3ju6vnBlL6k3X.jpg'
  }
};

export const CATEGORY_IMAGES: { [key: string]: string } = {
  '1': 'https://images.unsplash.com/photo-1534809027769-b00d750a6bac?w=400&h=300&fit=crop',
  '2': 'https://images.unsplash.com/photo-1527224857830-43a7acc85260?w=400&h=300&fit=crop',
  '3': 'https://images.unsplash.com/photo-1533613220915-609f661a6fe1?w=400&h=300&fit=crop',
  '4': 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=400&h=300&fit=crop',
  '5': 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=300&fit=crop',
  '6': 'https://images.unsplash.com/photo-1547119957-637f8679db1e?w=400&h=300&fit=crop'
};

export const AVATARS: string[] = [
  'https://i.pravatar.cc/150?img=1',
  'https://i.pravatar.cc/150?img=2',
  'https://i.pravatar.cc/150?img=3',
  'https://i.pravatar.cc/150?img=4',
  'https://i.pravatar.cc/150?img=5',
  'https://i.pravatar.cc/150?img=6',
  'https://i.pravatar.cc/150?img=7',
  'https://i.pravatar.cc/150?img=8'
];

export const DEFAULT_IMAGES = {
  thumbnail: 'https://via.placeholder.com/300x450/667eea/ffffff?text=Sem+Imagem',
  banner: 'https://via.placeholder.com/1920x1080/667eea/ffffff?text=Banner',
  category: 'https://via.placeholder.com/400x300/667eea/ffffff?text=Categoria',
  avatar: 'https://i.pravatar.cc/150?img=9'
};