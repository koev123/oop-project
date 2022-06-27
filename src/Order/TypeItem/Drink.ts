import { MenuItem } from "../ManuItem";

export class Drink extends MenuItem{
    constructor(private Type:string = "drink", menuItemId:number,menuItemName:string,menuItemType:string){
        super(menuItemId,menuItemName,menuItemType);
     }
}