import { MenuItem } from "../Order/ManuItem";

export class Drink extends MenuItem{
    constructor(private Type:string = "drink", menuItemId:number,menuItemName:string,menuItemType:string){
        super(menuItemId,menuItemName,menuItemType);
     }
}