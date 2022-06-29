
import { Item } from "./Item";
import { MainFoodCategory } from "./MainFoodCategory";
export class Food extends Item{
    constructor(id:number,title:string,price:number,category:MainFoodCategory){
        super(id,title,category,price);
    }
}