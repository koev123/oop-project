import { MenuItem } from "../ManuItem";
export class SideDish extends MenuItem {
    constructor(Type = "SideDish", menuItemId, menuItemName, menuItemType) {
        super(menuItemId, menuItemName, menuItemType);
        this.Type = Type;
    }
}
