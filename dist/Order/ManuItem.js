"use strict";
exports.__esModule = true;
exports.MenuItem = void 0;
var MenuItem = /** @class */ (function () {
    function MenuItem(menuItemId, menuItemName, menuItemType) {
        this.menuItemId = menuItemId;
        this.menuItemName = menuItemName;
        this.menuItemType = menuItemType;
        this.desserts = [];
        this.drinks = [];
        this.foods = [];
        this.otherItem = [];
        this.sideDish = [];
        this.starter = [];
    }
    MenuItem.prototype.getTypeDessert = function (customerDessert) {
        this.desserts.push(customerDessert);
    };
    MenuItem.prototype.getTypeDrink = function (customerDrink) {
        this.drinks.push(customerDrink);
    };
    MenuItem.prototype.getTypeOrtherItem = function (customerOtherItem) {
        this.otherItem.push(customerOtherItem);
    };
    MenuItem.prototype.getTypeSideDish = function (customerSideDish) {
        this.sideDish.push(customerSideDish);
    };
    MenuItem.prototype.getTypeStarter = function (customerStarter) {
        this.starter.push(customerStarter);
    };
    MenuItem.prototype.getTypeMainFood = function (customerFood) {
        this.foods.push(customerFood);
    };
    return MenuItem;
}());
exports.MenuItem = MenuItem;
