import { Item } from "./Item";
import { MainDrinkCategory } from "./MainDrinkCategory";

export class Drink extends Item{
    constructor(id:number,title:string,price:number,category:MainDrinkCategory,){
        super(id,title,category,price);
    }
  
}