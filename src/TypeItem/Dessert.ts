import { MenuItem } from "../Order/ManuItem";
export class Dessert extends MenuItem{
 constructor(private Type:string = "dessert", menuItemId:number,menuItemName:string,menuItemType:string){
    super(menuItemId,menuItemName,menuItemType);
 }
}