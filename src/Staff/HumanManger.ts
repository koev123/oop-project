import { Customer } from "../customer/Customer";
import { Staff } from "./Staff";

export class HumanManager{
    constructor( private customer:Customer[]=[],private staff:Staff[]=[]){}
   
    addCustomer(customer:Customer){
        this.customer.push(customer)
    }
    addStaff(staff:Staff){
        this.staff.push(staff)
    }
    getCustomer(){
        return this.customer
    }

    getStaff(){
        return this.customer
    }
}

