import { MenuItem } from "../ManuItem";

export class SideDish extends MenuItem{
    constructor(private Type:string = "SideDish", menuItemId:number,menuItemName:string,menuItemType:string){
        super(menuItemId,menuItemName,menuItemType);
     }
}