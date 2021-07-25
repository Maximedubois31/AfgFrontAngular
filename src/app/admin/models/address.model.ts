export class Address {
    constructor(
        public id:number,
        public number: string,
        public street: Address,
        public city: Address,
        public zip: string,
        public country: string,
    ){}
}