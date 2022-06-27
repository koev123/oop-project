

export class OtherItem extends MenuItem{
    constructor(private Type:string = "otherItem", menuItemId:number,menuItemName:string,menuItemType:string){
        super(menuItemId,menuItemName,menuItemType);
     }
}