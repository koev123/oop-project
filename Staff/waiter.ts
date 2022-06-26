import { Person } from "./Person";

export class Waiter extends Person {
    constructor(private runner:string , name:string,  id:number) {
        super(name,id);
        
    }
}