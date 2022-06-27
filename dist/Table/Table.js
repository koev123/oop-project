"use strict";
exports.__esModule = true;
exports.Table = void 0;
var TableStatus_1 = require("./TableStatus");
var Table = /** @class */ (function () {
    function Table(id, chair) {
        if (chair === void 0) { chair = []; }
        this.id = id;
        this.chair = chair;
        this.status = TableStatus_1.Tablestatus.FREE;
        this.customer = undefined;
    }
    Table.prototype.setCustomer = function (customer) {
        this.customer = customer;
    };
    Table.prototype.hasCustomer = function () {
        return this.customer !== undefined;
    };
    Table.prototype.getCustomer = function () {
        return this.customer;
    };
    Table.prototype.getStatue = function () {
        return this.status;
    };
    Table.prototype.setStatus = function (newStatus) {
        this.status = newStatus;
    };
    return Table;
}());
exports.Table = Table;
