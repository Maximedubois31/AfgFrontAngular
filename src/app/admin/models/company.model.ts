import { Address } from "./address.model";

export class Company {
    constructor(
        public id:number,
        public companyName: string,
        public invoiceAddress: Address,
        public deliveryAddress: Address,
        public siret: string,
        public email: string,
        public phone: string,
        public vatNumber: string,
        public nafApeCode: string,

    ){}
}