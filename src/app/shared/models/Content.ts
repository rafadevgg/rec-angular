export class Content {

    constructor(
        public id = '',
        public title = '',
        public type = '',
        public description = '',
        public synopsis = '',
        public releaseYear = 0,
        public duration = 0,
        public categoryId = '',
        public director = '',
        public cast: string[] = [],
        public rating = '',
        public thumbnail = '',
        public banner = '',
        public featured = false,
        public views = 0,
        public likes = 0,
        public imdbRating = 0
    ) { }

    get image(): string {
        return this.thumbnail;
    }

}