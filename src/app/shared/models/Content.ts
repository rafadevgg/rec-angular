// src/app/shared/models/Content.ts

/**
 * Modelo que representa um filme ou série
 */
export class Content {
    
    constructor(
        public id = 0,              // ID único do conteúdo
        public title = '',          // Título do filme/série
        public description = '',    // Descrição/sinopse
        public image = '',          // URL da imagem/poster
        public categoryId = 0,      // ID da categoria a que pertence
        public type = '',           // Tipo: 'movie' ou 'series'
        public releaseYear = 0      // Ano de lançamento
    ) {}

}