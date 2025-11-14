// src/app/shared/models/Category.ts

/**
 * Modelo que representa uma categoria de filmes/séries
 * Exemplo: Ação, Comédia, Drama, etc.
 */
export class Category {
    
    constructor(
        public id = 0,           // ID único da categoria
        public name = '',        // Nome da categoria (ex: "Ação")
        public image = ''        // URL da imagem da categoria
    ) {}

}