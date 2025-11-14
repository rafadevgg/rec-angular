// src/app/shared/models/Review.ts

/**
 * Modelo que representa uma avaliação de um filme/série
 */
export class Review {
    
    constructor(
        public id = 0,           // ID único da avaliação
        public contentId = 0,    // ID do filme/série avaliado
        public author = '',      // Nome de quem fez a avaliação
        public rating = 0,       // Nota de 1 a 5
        public comment = '',     // Comentário da avaliação
        public date = ''         // Data da avaliação
    ) {}

}