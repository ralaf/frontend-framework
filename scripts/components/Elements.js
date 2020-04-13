(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./HeaderToolbox/HeaderToolbox", "./LabelField/LabelField", "./TextField/TextField", "./Container/ContainerComponent", "./ButtonControl/ButtonControl"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const HeaderToolbox_1 = require("./HeaderToolbox/HeaderToolbox");
    const LabelField_1 = require("./LabelField/LabelField");
    const TextField_1 = require("./TextField/TextField");
    const ContainerComponent_1 = require("./Container/ContainerComponent");
    const ButtonControl_1 = require("./ButtonControl/ButtonControl");
    exports.Elements = {
        'label-control': LabelField_1.LabelField,
        'text-field': TextField_1.TextField,
        'container-control': ContainerComponent_1.Container,
        'header-toolbox': HeaderToolbox_1.HeaderToolbox,
        'button-control': ButtonControl_1.ButtonControl
    };
});
//# sourceMappingURL=Elements.js.map