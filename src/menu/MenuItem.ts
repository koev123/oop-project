import { Drink } from "./Drink";
import { Food } from "./Food";
export class MenuItem {
    menuItem: (Drink|Food)[]=[];
    // push: any;
    addItem(typeItem:Drink|Food){
        this.menuItem.push(typeItem);
    }
    getItem(){
        return this.menuItem;
    }
}
