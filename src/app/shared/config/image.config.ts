// src/app/shared/config/images.config.ts

/**
 * Configuração de imagens locais
 * Adicione os caminhos das imagens aqui
 */

export const CONTENT_IMAGES: { [key: string]: { thumbnail: string; banner: string } } = {
  '1': {
    thumbnail: '/images/movies/resgate-final.jpg',
    banner: '/images/movies/resgate-final-banner.jpg'
  },
  '2': {
    thumbnail: '/images/movies/stranger-things.avif',
    banner: '/images/movies/stranger-things.avif'
  },
  '3': {
    thumbnail: '/images/movies/amor-paris.jpg',
    banner: '/images/movies/amor-paris-banner.jpg'
  },
  '4': {
    thumbnail: '/images/movies/office-brasil.jpg',
    banner: '/images/movies/office-brasil-banner.jpg'
  },
  '5': {
    thumbnail: '/images/movies/casa-assombrada.jpg',
    banner: '/images/movies/casa-assombrada-banner.jpg'
  },
  '6': {
    thumbnail: '/images/movies/breaking-bad.jpg',
    banner: '/images/movies/breaking-bad-banner.jpg'
  },
  '7': {
    thumbnail: '/images/movies/planeta-terra.jpg',
    banner: '/images/movies/planeta-terra-banner.jpg'
  },
  '8': {
    thumbnail: '/images/movies/blade-runner.jpg',
    banner: '/images/movies/blade-runner-banner.jpg'
  }
};

export const CATEGORY_IMAGES: { [key: string]: string } = {
  '1': '/images/categories/acao.jpg',
  '2': '/images/categories/comedia.jpg',
  '3': '/images/categories/drama.jpg',
  '4': '/images/categories/terror.jpg',
  '5': '/images/categories/ficcao.jpg',
  '6': '/images/categories/documentario.jpg'
};

export const AVATARS: string[] = [
  '/images/avatars/avatar1.jpg',
  '/images/avatars/avatar2.jpg',
  '/images/avatars/avatar3.jpg',
  '/images/avatars/avatar4.jpg',
  '/images/avatars/avatar5.jpg'
];

// Imagens padrão caso não encontre
export const DEFAULT_IMAGES = {
  thumbnail: 'https://via.placeholder.com/300x450/667eea/ffffff?text=Sem+Imagem',
  banner: 'https://via.placeholder.com/1920x1080/667eea/ffffff?text=Banner',
  category: 'https://via.placeholder.com/400x300/667eea/ffffff?text=Categoria',
  avatar: 'https://via.placeholder.com/150/667eea/ffffff?text=User'
};