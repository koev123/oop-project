import { Person } from "./Person";

class Staff extends Person{
    constructor(salary:number,name:string,id:number){
        super(name,id);
    }
}