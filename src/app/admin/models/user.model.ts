import { Company } from "./company.model";

export class User {
    constructor(
        public id: number,
        public firstName: string,
        public lastName: string,
        public email: string,
        public password: string,
        public active: boolean,
        public roles: string,
        public company: string
    ){}
}