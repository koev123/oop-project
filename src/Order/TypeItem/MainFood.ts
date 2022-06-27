import { MenuItem } from "../ManuItem";
export class MainFood extends MenuItem{
    constructor(private Type:string = "food", menuItemId:number,menuItemName:string,menuItemType:string){
        super(menuItemId,menuItemName,menuItemType);
     }
}