export class Review {

    constructor(

        public id: string = '',
        public contentId: number = 0,
        public authorName: string = '',
        public authorAvatar: string = '',
        public rating: number = 0,
        public title: string = '',
        public comment: string = ''

    ) {}

}