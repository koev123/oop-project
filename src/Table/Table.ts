
import { Chair } from "./Chair";
import { Tablestatus } from "./TableStatus";

export class Table {
    chair: Chair[]=[];
    
    constructor(private id:number, private  status:Tablestatus) { }

    
   addCahir(chair:Chair){
    return this.chair.push(chair)
   }
}