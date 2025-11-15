// src/app/shared/models/Content.ts

/**
 * Modelo que representa um filme ou série
 */
export class Content {
    
    constructor(
        public id = '',                    // ID único do conteúdo
        public title = '',                 // Título do filme/série
        public type = '',                  // Tipo: 'movie' ou 'series'
        public description = '',           // Descrição curta
        public synopsis = '',              // Sinopse completa
        public releaseYear = 0,            // Ano de lançamento
        public duration = 0,               // Duração em minutos
        public categoryId = '',            // ID da categoria
        public director = '',              // Diretor
        public cast: string[] = [],        // Elenco
        public rating = '',                // Classificação indicativa
        public thumbnail = '',             // Imagem pequena (300x450)
        public banner = '',                // Imagem grande (1920x1080)
        public featured = false,           // Destaque na home
        public views = 0,                  // Número de visualizações
        public likes = 0,                  // Número de curtidas
        public imdbRating = 0              // Nota IMDB
    ) {}

    // Mantém compatibilidade com código antigo
    get image(): string {
        return this.thumbnail;
    }

}