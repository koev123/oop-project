
import { Waiter } from "../humen/staff/Waiter";
import { Table } from "../Table/Table";
import { Drink } from "./Drink";
import { Food } from "./Food";

export class Order{
    private  menuItem:(Food|Drink)[]=[];
    private table:Table;
    
    private waiter:Waiter;
 
    constructor(
        private orderId:number,
       )
        {}
    addItem(newItem:Drink | Food){
        this.menuItem.push(newItem);
    }
    getOrderItem(){
        return this.menuItem;
    }
    addWaiter(waiter:Waiter){
        this.waiter = waiter;
    }
    setTable(table:Table){
        this.table = table;
    }
    getTable(){
        return this.table;
    }
} 

    
