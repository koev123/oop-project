import { MenuItem } from "../ManuItem";
export class Starter extends MenuItem {
    constructor(Type = "Starter", menuItemId, menuItemName, menuItemType) {
        super(menuItemId, menuItemName, menuItemType);
        this.Type = Type;
    }
}
