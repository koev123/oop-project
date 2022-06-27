"use strict";
exports.__esModule = true;
exports.Restaurant = void 0;
var tableManager_1 = require("./Table/tableManager");
var Restaurant = /** @class */ (function () {
    function Restaurant(name, address, table) {
        if (table === void 0) { table = []; }
        this.name = name;
        this.address = address;
        this.table = table;
        this.tables = new tableManager_1.TableManager();
    }
    Restaurant.prototype.addTable = function (table) {
        return this.table.push(table);
    };
    return Restaurant;
}());
exports.Restaurant = Restaurant;
