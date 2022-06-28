import { Table } from "./Table";

export class TableManager{
   public table:Table[]=[];
    getNumberOfTable():number{
        return this.table.length;
    }
    
    findFreeTable():Table|undefined{
        return undefined;
    }
}