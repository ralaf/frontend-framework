(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TElement;
    (function (TElement) {
        TElement["container-control"] = "container-control";
        TElement["text-field"] = "text-field";
        TElement["label-control"] = "label-control";
        TElement["header-toolbox"] = "header-toolbox";
        TElement["button-control"] = "button-control";
    })(TElement = exports.TElement || (exports.TElement = {}));
});
//# sourceMappingURL=TElement.js.map