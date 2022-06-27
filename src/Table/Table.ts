import { Customer } from "../customer/Customer";
import { Chair } from "./Chair";
import { Tablestatus } from "./TableStatus";

export class Table {
    
   
    private  status=Tablestatus.FREE;
    private customer?:Customer=undefined;
    constructor(private id:number,private chair:Chair[]=[]) { }

    setCustomer(customer:Customer){
        this.customer=customer;
    }
    
    hasCustomer(){
        return this.customer!==undefined;
    }

    getCustomer(){
        return this.customer
    }

    getStatue(){
        return this.status;
    }

    setStatus(newStatus: Tablestatus){
        this.status=newStatus;
    }
  
   
}