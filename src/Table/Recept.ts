import { Customer } from "../humen/customer/Customer";
import { MenuItem } from "../menu/MenuItem";
import { Order } from "../menu/Order";
import { Table } from "./Table";


export class Recept{
     private MenuItem:MenuItem[]=[];

     private orderId:Order;
    constructor(private receptid:number){
    }
   
    getmenuMagager(){
        return this.MenuItem;
    }
   
   
    addorderId(orderId:Order){
        return this.orderId=orderId;
    }
   
    menuManage(){
        let total=0
        for(let namu of this. MenuItem){
            for(let item of namu.menuItem ){
                total=+item.getprice();
            } 

        }

    }


}



