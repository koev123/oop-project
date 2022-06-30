

import { Order } from "../menu/Order";


export class Recept{
    receipt(order: Order){
        let totalPrice:number = 0;
        let result:string = "";
        result += "TableId#: " + order.getTable().getTableId() + "\n";
        let items = order.getOrderItem();
        for (let item of items){
            result += "- " + item.getTitle() + ": " + item.getPrice()+'\n';
            totalPrice += item.getPrice();
        }
        return result + "Total: " + totalPrice;

    }
}