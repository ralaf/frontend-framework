(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./ButtonControl.html!text", "../AbstractComponent/AbstractComponent", "../../utils/Utils"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const template = require("./ButtonControl.html!text");
    const AbstractComponent_1 = require("../AbstractComponent/AbstractComponent");
    const Utils_1 = require("../../utils/Utils");
    class ButtonControl extends AbstractComponent_1.AbstractComponent {
        build() {
            this.componentElement = Utils_1.Utils.createElementFromTemplate(template);
            this.buttonControl = Utils_1.Utils.findFirstByAttribute(this.componentElement, 'data-button-control');
            this.buttonControl.addEventListener('click', () => {
                // this.setData(!this.getData());
                // console.log(this,(this.getData()));
                if (this.getData() !== this.buttonControl.innerText) {
                    const value = this.getData();
                    this.updateValue(!value);
                    const interval = setInterval(() => {
                        const time = this.getData('timeCounter') - 1;
                        this.updateValue(this.getData('timeCounter') - 1, 'timeCounter');
                        this.updateView();
                        if (time === 0) {
                            clearInterval(interval);
                        }
                    }, 1000);
                }
            });
            this.updateView();
        }
        updateView() {
            this.buttonControl.innerText = this.getData('timeCounter');
        }
    }
    exports.ButtonControl = ButtonControl;
});
//# sourceMappingURL=ButtonControl.js.map