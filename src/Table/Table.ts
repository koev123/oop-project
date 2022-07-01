import { Customer } from "../humen/customer/Customer";

export class Table {
    // recept:Recept
    customer:Customer[]=[];
    constructor(private id:number){}

    getTableId(){
        return this.id;
    }
    addCustomer(customer:Customer){
        return this.customer.push(customer)

    }
    getCustoner(){
        return this.customer
    }

}
