
import { OrderItem } from "./OrderItem";

export class Order {
    constructor(
        private orderID:number,
        private orderTime:string,
        private orderTotal:number,
        private orderPaid:boolean,
        orderItem:OrderItem
    ) {}



}