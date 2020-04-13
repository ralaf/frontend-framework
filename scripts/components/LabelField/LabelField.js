(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./LabelField.html!text", "../AbstractComponent/AbstractComponent", "../../utils/Utils"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const template = require("./LabelField.html!text");
    const AbstractComponent_1 = require("../AbstractComponent/AbstractComponent");
    const Utils_1 = require("../../utils/Utils");
    class LabelField extends AbstractComponent_1.AbstractComponent {
        build() {
            this.componentElement = Utils_1.Utils.createElementFromTemplate(template);
            this.valueElement = Utils_1.Utils.findFirstByAttribute(this.componentElement, 'data-label-container');
            this.updateView();
        }
        updateView() {
            this.valueElement.innerText = this.getData();
        }
    }
    exports.LabelField = LabelField;
});
//# sourceMappingURL=LabelField.js.map