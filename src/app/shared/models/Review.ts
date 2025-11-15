// src/app/shared/models/Review.ts

/**
 * Modelo que representa uma avaliação de um filme/série
 */
export class Review {
    
    constructor(
        public id = '',              // ID único da avaliação
        public contentId = '',       // ID do filme/série (agora é STRING)
        public authorName = '',      // Nome de quem fez a avaliação
        public authorAvatar = '',    // Avatar do autor
        public rating = 0,           // Nota de 1 a 5
        public title = '',           // Título da avaliação
        public comment = ''          // Comentário da avaliação
    ) {}

    // Mantém compatibilidade com código antigo
    get author(): string {
        return this.authorName;
    }

    set author(value: string) {
        this.authorName = value;
    }

}