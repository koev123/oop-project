import { MenuItem } from "../ManuItem";
export class Drink extends MenuItem {
    constructor(Type = "drink", menuItemId, menuItemName, menuItemType) {
        super(menuItemId, menuItemName, menuItemType);
        this.Type = Type;
    }
}
