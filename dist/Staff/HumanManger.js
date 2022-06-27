"use strict";
exports.__esModule = true;
exports.HumanManager = void 0;
var HumanManager = /** @class */ (function () {
    function HumanManager(customer, staff) {
        if (customer === void 0) { customer = []; }
        if (staff === void 0) { staff = []; }
        this.customer = customer;
        this.staff = staff;
    }
    HumanManager.prototype.addCustomer = function (customer) {
        this.customer.push(customer);
    };
    HumanManager.prototype.addStaff = function (staff) {
        this.staff.push(staff);
    };
    HumanManager.prototype.getCustomer = function () {
        return this.customer;
    };
    HumanManager.prototype.getStaff = function () {
        return this.customer;
    };
    return HumanManager;
}());
exports.HumanManager = HumanManager;
