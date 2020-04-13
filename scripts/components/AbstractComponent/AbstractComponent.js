(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../services/modelService/ModelService"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const ModelService_1 = require("../../services/modelService/ModelService");
    class AbstractComponent {
        constructor(metadata, eventBus, path = 'data') {
            this.metadata = metadata;
            this.eventBus = eventBus;
            this.path = path;
            this.onModelChange = (path) => {
                if (this.isCurrentPath(path)) {
                    this.updateView();
                }
            };
        }
        setData(model) {
            this.model = model;
            ModelService_1.ModelService.setProxy(this.path, model, this.eventBus);
            this.eventBus.on('modelChange', this.onModelChange);
        }
        isCurrentPath(path) {
            return path === this.path;
        }
        getData(propertyName = this.getPropertyName()) {
            return this.getContext()[propertyName];
        }
        getContext() {
            let pathArray = this.path.split('.'), context = this.model;
            pathArray.pop();
            pathArray.forEach((pathPart) => {
                if (context[pathPart]) {
                    context = context[pathPart];
                }
                else {
                    context = {};
                }
            });
            return context;
        }
        getPropertyName() {
            let pathArray = this.path.split('.');
            return pathArray.pop();
        }
        updateValue(value, propertyName = this.getPropertyName()) {
            this.getContext()[propertyName] = value;
        }
        isBuilt() {
            return !!this.componentElement;
        }
        render(host) {
            if (!this.isBuilt()) {
                this.build();
            }
            host.appendChild(this.componentElement);
        }
    }
    exports.AbstractComponent = AbstractComponent;
});
//# sourceMappingURL=AbstractComponent.js.map