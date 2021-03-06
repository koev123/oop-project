import { MainDrinkCategory } from "./MainDrinkCategory";
import { MainFoodCategory } from "./MainFoodCategory";

export abstract class Item {
   constructor(
      protected id: number,
      protected title: string,
      protected category: MainDrinkCategory | MainFoodCategory,
      protected price: number) { }


   getPrice(){
      return this.price;
   }
   getTitle(){
      return this.title;
   }
}