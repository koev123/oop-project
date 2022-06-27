"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Dessert = void 0;
var ManuItem_1 = require("../ManuItem");
var Dessert = /** @class */ (function (_super) {
    __extends(Dessert, _super);
    function Dessert(Type, menuItemId, menuItemName, menuItemType) {
        if (Type === void 0) { Type = "dessert"; }
        var _this = _super.call(this, menuItemId, menuItemName, menuItemType) || this;
        _this.Type = Type;
        return _this;
    }
    return Dessert;
}(ManuItem_1.MenuItem));
exports.Dessert = Dessert;
