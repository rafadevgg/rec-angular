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
    thumbnail: 'https://image.tmdb.org/t/p/w500/4g5gK5eEWZg8swIZl6eX2AoJp8S.jpg',
    banner: 'https://image.tmdb.org/t/p/original/jsoz1HlxczSuTx0mDl2h0lxy36l.jpg'
  },
  '4': { // The Office Brasil
    thumbnail: 'https://image.tmdb.org/t/p/w500/qWnJzyZhyy74gjpSjIXWmuk0ifX.jpg',
    banner: 'https://image.tmdb.org/t/p/original/qWnJzyZhyy74gjpSjIXWmuk0ifX.jpg'
  },
  '5': { // A Casa Assombrada (The Haunting of Hill House)
    thumbnail: 'https://image.tmdb.org/t/p/w500/38PkhBGRQtmVx2drvPik3F42qHO.jpg',
    banner: 'https://image.tmdb.org/t/p/original/jkKAZU3LYCrBC6T8Ts0xLh93JAk.jpg'
  },
  '6': { // Breaking Bad
    thumbnail: 'https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg',
    banner: 'https://image.tmdb.org/t/p/original/tsRy63Mu5cu8etL1X7ZLyf7UP1M.jpg'
  },
  '7': { // Planeta Terra: Vida Selvagem (Planet Earth)
    thumbnail: 'https://image.tmdb.org/t/p/w500/2GVgDKqjU4ZLmwczmWWVIFtzH6d.jpg',
    banner: 'https://image.tmdb.org/t/p/original/2XL9eddQQWlT0RjTSGFn1MEMrsU.jpg'
  },
  '8': { // Blade Runner 2099
    thumbnail: 'https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg',
    banner: 'https://image.tmdb.org/t/p/original/ilKE2RPuuhC59M3ju6vnBlL6k3X.jpg'
  },
  '9': { // O Mistério da Ilha (Shutter Island)
    thumbnail: 'https://image.tmdb.org/t/p/w500/4GDy0PHYX3VRXUtwK5ysFbg3kEx.jpg',
    banner: 'https://image.tmdb.org/t/p/original/orFQbyZ5E56jD5jsICeseu2ufWK.jpg'
  },
  '10': { // Procurando Nemo (Finding Nemo)
    thumbnail: 'https://image.tmdb.org/t/p/w500/eHuGQ10FUzK1mdOY69wF5pGgEf5.jpg',
    banner: 'https://image.tmdb.org/t/p/original/fCayJrkfRaCRCTh8GqN30f8oyQF.jpg'
  },
  '11': { // Indiana Jones: A Última Cruzada
    thumbnail: 'https://image.tmdb.org/t/p/w500/4p1N2Qrt8j0H8xMHMHvtRxv9weZ.jpg',
    banner: 'https://image.tmdb.org/t/p/original/vfvVuu1JdnEGcyZUj8NCSy6LqPc.jpg'
  },
  '12': { // Dark (série alemã)
    thumbnail: 'https://image.tmdb.org/t/p/w500/5TqscGjFjNTVYXcEnn6MP2vO2fU.jpg',
    banner: 'https://image.tmdb.org/t/p/original/eSN92XnEvbDk7InCiWhgtvhDZVE.jpg'
  },
  '13': { // Matrix
    thumbnail: 'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
    banner: 'https://image.tmdb.org/t/p/original/vybQQ7w7vGvF53IsGD0y0JSgIsA.jpg'
  },
  '14': { // Game of Thrones
    thumbnail: 'https://image.tmdb.org/t/p/w500/1XS1oqL89opfnbLl8WnZY1O1uJx.jpg',
    banner: 'https://image.tmdb.org/t/p/original/suopoADq0k8YZr4dQXcU6pToj6s.jpg'
  },
  '15': { // Interestelar
    thumbnail: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
    banner: 'https://image.tmdb.org/t/p/original/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg'
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