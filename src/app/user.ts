export class User{
    constructor(
        public firstName?: string,
        public email?: string,
        public mobile?: number,
        public password?: string,
        public city? : string,
        public gender?: string,
        public subscribe?: boolean
    ){}
}