import { Table } from "./Table/Table";
import { TableManager } from "./Table/tableManager";

export class Restaurant {
   tableManager: any;
   constructor(private name: string,private address: string ,private table:Table[]=[]){}
   public tables: TableManager = new TableManager();
   addTable(table:Table){
    return this.table.push(table);
}
}


