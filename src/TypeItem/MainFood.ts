import { MenuItem } from "../Order/ManuItem";
export class MainFood extends MenuItem{
    constructor(private Type:string = "food", menuItemId:number,menuItemName:string,menuItemType:string){
        super(menuItemId,menuItemName,menuItemType);
     }
}