"use strict";
exports.__esModule = true;
exports.Table = void 0;
var Table = /** @class */ (function () {
    function Table(id, status) {
        this.id = id;
        this.status = status;
        this.chair = [];
    }
    Table.prototype.addCahir = function (chair) {
        return this.chair.push(chair);
    };
    return Table;
}());
exports.Table = Table;
