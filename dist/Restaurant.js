"use strict";
exports.__esModule = true;
exports.Restaurant = void 0;
var tableManager_1 = require("./Table/tableManager");
var Restaurant = /** @class */ (function () {
    function Restaurant(name, address) {
        this.name = name;
        this.address = address;
        this.table = [];
        this.cheff = [];
        this.waiter = [];
        this.tables = new tableManager_1.TableManager();
    }
    Restaurant.prototype.addTable = function (table) {
        return this.table.push(table);
    };
    Restaurant.prototype.addCheff = function (cheff) {
        return this.cheff.push(cheff);
    };
    Restaurant.prototype.addwaiter = function (waiter) {
        return this.waiter.push(waiter);
    };
    return Restaurant;
}());
exports.Restaurant = Restaurant;
