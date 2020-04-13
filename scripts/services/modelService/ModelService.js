(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../types/ProxyType"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const ProxyType_1 = require("../../types/ProxyType");
    class ModelService {
        constructor(data) {
            this.modelObject = { data };
        }
        getModel() {
            return this.modelObject;
        }
        static setProxy(path, data, eventBus) {
            let pathArray = path.split('.'), context = data, valueProperty = pathArray.pop(), contextProperty = pathArray.pop();
            pathArray.forEach((pathPart) => {
                if (context[pathPart]) {
                    context = context[pathPart];
                }
                else {
                    context = {};
                }
            });
            if (!contextProperty) {
                this.createProxy(context, valueProperty, eventBus, pathArray.join('.'));
            }
            else if (Array.isArray(context[contextProperty][valueProperty])) {
                this.createProxy(context[contextProperty], valueProperty, eventBus, `${contextProperty}${pathArray.length ? '.' + pathArray.join('.') : ''}`);
            }
            else {
                this.createProxy(context, contextProperty, eventBus, pathArray.join('.'));
            }
        }
        static createProxy(context, valueProperty, eventBus, path) {
            if (context[valueProperty] instanceof ProxyType_1.ProxyType) {
                return;
            }
            context[valueProperty] = new Proxy(context[valueProperty], {
                getPrototypeOf: function (key) {
                    return ProxyType_1.ProxyType.prototype;
                },
                set: (target, property, value) => {
                    target[property] = value;
                    if (!(value instanceof ProxyType_1.ProxyType) &&
                        (!Array.isArray(target) || Array.isArray(target) && property !== 'length')) {
                        console.log('change trigger', context, valueProperty);
                        eventBus.trigger('modelChange', `${path ? `${path}.` : ''}${valueProperty}.${property}`);
                    }
                    return true;
                }
            });
        }
    }
    exports.ModelService = ModelService;
});
//# sourceMappingURL=ModelService.js.map