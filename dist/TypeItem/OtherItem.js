import { MenuItem } from "../ManuItem";
export class OtherItem extends MenuItem {
    constructor(Type = "otherItem", menuItemId, menuItemName, menuItemType) {
        super(menuItemId, menuItemName, menuItemType);
        this.Type = Type;
    }
}
