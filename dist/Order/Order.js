"use strict";
exports.__esModule = true;
exports.Order = void 0;
var Order = /** @class */ (function () {
    function Order(orderID, orderTime, orderTotal, orderPaid, orderItem) {
        this.orderID = orderID;
        this.orderTime = orderTime;
        this.orderTotal = orderTotal;
        this.orderPaid = orderPaid;
    }
    return Order;
}());
exports.Order = Order;
