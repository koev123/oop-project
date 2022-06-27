import { Person } from "./Person";

export class Staff extends Person{
    constructor(salary:number,name:string,id:number){
        super(name,id);
    }
}