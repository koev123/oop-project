import { MenuItem } from "../ManuItem";
export class Dessert extends MenuItem {
    constructor(Type = "dessert", menuItemId, menuItemName, menuItemType) {
        super(menuItemId, menuItemName, menuItemType);
        this.Type = Type;
    }
}
