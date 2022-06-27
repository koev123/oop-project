"use strict";
exports.__esModule = true;
exports.TableManager = void 0;
var TableManager = /** @class */ (function () {
    function TableManager() {
        this.table = [];
    }
    TableManager.prototype.getNumberOfTable = function () {
        return this.table.length;
    };
    TableManager.prototype.findFreeTable = function () {
        return undefined;
    };
    return TableManager;
}());
exports.TableManager = TableManager;
