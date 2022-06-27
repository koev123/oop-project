import { MenuItem } from "../ManuItem";

export class Starter extends MenuItem{
    constructor(private Type:string = "Starter", menuItemId:number,menuItemName:string,menuItemType:string){
        super(menuItemId,menuItemName,menuItemType);
     }
}