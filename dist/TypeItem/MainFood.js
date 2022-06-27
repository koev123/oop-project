import { MenuItem } from "../ManuItem";
export class MainFood extends MenuItem {
    constructor(Type = "food", menuItemId, menuItemName, menuItemType) {
        super(menuItemId, menuItemName, menuItemType);
        this.Type = Type;
    }
}
