export class Review {

    constructor(
        public id = '',
        public contentId = '',
        public authorName = '',
        public authorAvatar = '',
        public rating = 0,
        public title = '',
        public comment = ''
    ) { }

    get author(): string {
        return this.authorName;
    }

    set author(value: string) {
        this.authorName = value;
    }

}