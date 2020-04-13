(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../AbstractComponent/AbstractComponent", "../Elements"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const AbstractComponent_1 = require("../AbstractComponent/AbstractComponent");
    const Elements_1 = require("../Elements");
    class Container extends AbstractComponent_1.AbstractComponent {
        build() {
            this.componentElement = document.createElement('div');
            if (this.metadata.children) {
                this.metadata.children.forEach((childMetadata) => {
                    const child = new Elements_1.Elements[childMetadata.element](childMetadata, this.eventBus, this.path ? `${this.path}.${childMetadata.context}` : childMetadata.context);
                    child.setData(this.model);
                    child.render(this.componentElement);
                });
            }
        }
        updateView() {
            return null;
        }
    }
    exports.Container = Container;
});
//# sourceMappingURL=ContainerComponent.js.map