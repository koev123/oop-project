import { Customer } from "../humen/customer/Customer";

export class Chair{
    public customer?:Customer
    constructor(private chairid:number){}

    addCustomer(customer:Customer){
        return this.customer=customer;
    }
}
