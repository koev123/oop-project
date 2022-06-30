

// import { Recept } from "./Recept";
import { Tablestatus } from "./TableStatus";
export class Table {
    // recept:Recept 
    constructor(private id:number) { }

    getTableId(){
        return this.id;
    }
}