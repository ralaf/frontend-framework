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
    class EventBus {
        constructor() {
            this.subscriptions = {};
        }
        on(eventName, callback) {
            this.subscriptions[eventName] = this.subscriptions[eventName] || [];
            this.subscriptions[eventName].push(callback);
        }
        off(eventName, callback) {
            if (this.subscriptions[eventName]) {
                let index = this.subscriptions[eventName].indexOf(callback);
                this.subscriptions[eventName].splice(index, 1);
            }
        }
        trigger(eventName, param) {
            if (this.subscriptions[eventName]) {
                this.subscriptions[eventName].forEach((callback) => {
                    callback(param);
                });
            }
        }
    }
    exports.EventBus = EventBus;
});
//# sourceMappingURL=EventBus.js.map