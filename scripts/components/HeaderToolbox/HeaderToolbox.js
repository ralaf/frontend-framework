(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./HeaderToolbox.html!text", "./HeaderToolbox.css!text", "../../Utils/Utils", "../AbstractComponent/AbstractComponent"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const template = require("./HeaderToolbox.html!text");
    const stylesheet = require("./HeaderToolbox.css!text");
    const Utils_1 = require("../../Utils/Utils");
    const AbstractComponent_1 = require("../AbstractComponent/AbstractComponent");
    class HeaderToolbox extends AbstractComponent_1.AbstractComponent {
        build() {
            this.componentElement = Utils_1.Utils.createElementFromTemplate(template, stylesheet);
            this.updateView();
        }
        updateView() {
        }
    }
    exports.HeaderToolbox = HeaderToolbox;
});
//# sourceMappingURL=HeaderToolbox.js.map