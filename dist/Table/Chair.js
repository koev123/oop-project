"use strict";
exports.__esModule = true;
exports.Chair = void 0;
var Chair = /** @class */ (function () {
    function Chair(chairid) {
        this.chairid = chairid;
    }
    Chair.prototype.addCustomer = function (customer) {
        return this.customer = customer;
    };
    return Chair;
}());
exports.Chair = Chair;
