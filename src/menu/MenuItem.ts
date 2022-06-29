import { Drink } from "./Drink";
import { Food } from "./Food";
import { Item } from "./Item";
import { MainDrinkCategory } from "./MainDrinkCategory";
import {MainFoodCategory} from "./MainFoodCategory"

export class MenuItem {
    menuItem: (Drink|Food)[]=[];
    push: any;
    addItem(typeItem:Drink|Food){
        this.menuItem.push(typeItem);
    }
    getItem(){
        return this.menuItem;
    }
}
