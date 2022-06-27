import { Dessert } from "./TypeItem/Dessert";
import { Drink } from "./TypeItem/Drink";
import { MainFood } from "./TypeItem/MainFood";
import { OtherItem } from "./TypeItem/OtherItem";
import { SideDish } from "./TypeItem/SideDish";
import { Starter } from "./TypeItem/Starter";
export class MenuItem{
    desserts:Dessert[]=[];
    drinks:Drink[]=[];
    foods:MainFood[]=[];
    otherItem:OtherItem[]=[];
    sideDish:SideDish[]=[];
    starter:Starter[]=[];
    constructor(
        private menuItemId:number,
        private menuItemName:string,
        private menuItemType:string){}

        getTypeDessert(customerDessert:Dessert){
            this.desserts.push(customerDessert);
        }

        getTypeDrink(customerDrink:Drink){
            this.drinks.push(customerDrink);
        }

        getTypeOrtherItem(customerOtherItem: OtherItem){
            this.otherItem.push(customerOtherItem);
        }
        
        getTypeSideDish(customerSideDish: SideDish){
            this.sideDish.push(customerSideDish);
        }

        getTypeStarter(customerStarter:Starter){
            this.starter.push(customerStarter);
        }

        getTypeMainFood(customerFood:MainFood){
            this.foods.push(customerFood);
        }
}

