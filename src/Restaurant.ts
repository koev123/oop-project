import { Cheff } from "./humen/staff/Cheff";
import { Waiter } from "./humen/staff/Waiter";
import { Table } from "./Table/Table";
import { TableManager } from "./Table/tableManager";

export class Restaurant {
    private table: Table[] = [];
    private cheff:Cheff[]=[]
    private waiter:Waiter[]=[]
    constructor(private name: string, private address: string) { }
    public tables: TableManager = new TableManager();

    
    addTable(table: Table) {
        return this.table.push(table);
    }
    addCheff(cheff:Cheff){
        return this.cheff.push(cheff)

    }
    addwaiter(waiter:Waiter){
        return this.waiter.push(waiter)
    }
}


