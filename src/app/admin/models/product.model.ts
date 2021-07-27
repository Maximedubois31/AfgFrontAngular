export class Product {
    constructor(
        public id: Number,
        public name: string,
        public ref: string,
        public brand: string,
        public imageUrl: string,
        public origin: string,
        public quantityUnity: string,
        public description: string,
        public moq: Number,
        public productIsActive: boolean,
        public lowPrice: Number,
        public highPrice: Number,
        public productType: string,
        public supplier: string
    ) {}
}