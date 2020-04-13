(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../utils/Utils", "./TextField.html!text", "../AbstractComponent/AbstractComponent"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Utils_1 = require("../../utils/Utils");
    const template = require("./TextField.html!text");
    const AbstractComponent_1 = require("../AbstractComponent/AbstractComponent");
    class TextField extends AbstractComponent_1.AbstractComponent {
        build() {
            this.componentElement = Utils_1.Utils.createElementFromTemplate(template);
            this.inputElement = Utils_1.Utils.findFirstByAttribute(this.componentElement, 'data-text-field-component-input');
            this.inputElement.addEventListener('keyup', () => {
                if (this.getData() !== this.inputElement.value) {
                    this.updateValue(this.inputElement.value);
                }
            });
            this.updateView();
        }
        updateView() {
            this.inputElement.value = this.getData();
        }
    }
    exports.TextField = TextField;
});
//# sourceMappingURL=TextField.js.map