// src/app/shared/models/Category.ts

/**
 * Modelo que representa uma categoria de filmes/séries
 */
export class Category {
    
    constructor(
        public id = '',              // ID único da categoria
        public name = '',            // Nome da categoria
        public slug = '',            // Slug para URL
        public description = '',     // Descrição da categoria
        public image = '',           // URL da imagem
        public color = ''            // Cor tema da categoria
    ) {}

}