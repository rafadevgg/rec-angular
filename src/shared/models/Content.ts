export class Content {
    
    constructor(

        public id: string = '',
        public title: string = '',
        public type: string = '',
        public description: string = '',
        public synopsis: string = '',
        public releaseYear: number = 0,
        public duration: number = 0,
        public categoryId: number = 0,
        public director: string = '',
        public cast: string[] = [],
        public rating: string = '',
        public thumbnail: string = '',
        public banner: string = '',
        public featured: boolean = false,
        public views: number = 0,
        public likes: number = 0,
        public imdbRating: number = 0

    ) {}

}