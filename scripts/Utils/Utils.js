(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../node_modules/css-parser/dist/index"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const index_1 = require("../../node_modules/css-parser/dist/index");
    class Utils {
        static createElementFromTemplate(template, stylesheet) {
            const element = document.createRange().createContextualFragment(template).firstChild;
            return this.stylization(element, stylesheet);
        }
        static stylization(element, stylesheet) {
            if (stylesheet) {
                let parsedStylesheet = index_1.parseCSS(stylesheet), squareBracketsRegex = /\[(.*)\]/;
                for (let style of parsedStylesheet) {
                    if (style.selector.match(squareBracketsRegex)) {
                        for (let rule of style.rules) {
                            element.style[rule.key] = rule.value;
                        }
                    }
                    else if (element.outerHTML.match(style.selector)) {
                        for (let rule of style.rules) {
                            element.style[rule.key] = rule.value;
                        }
                    }
                }
            }
            return element;
        }
        static findFirstByAttribute(container, attribute, value) {
            if (container instanceof HTMLElement && container.hasAttribute(attribute)) {
                return container;
            }
            return this.getFirstByAttributeInDOMLevel(this.getChildrenOfElements([container]), attribute, value);
        }
        static getFirstByAttributeInDOMLevel(elements, attribute, value) {
            if (!elements.length) {
                return null;
            }
            for (let element of elements) {
                if (element.hasAttribute(attribute)) {
                    if (value) {
                        if (value === element.getAttribute(attribute)) {
                            return element;
                        }
                    }
                    else {
                        return element;
                    }
                }
            }
            return this.getFirstByAttributeInDOMLevel(this.getChildrenOfElements(elements), attribute, value);
        }
        static getChildrenOfElements(elements) {
            let children = [];
            elements.forEach((element) => {
                children = children.concat(Array.from(element.children));
            });
            return children;
        }
    }
    exports.Utils = Utils;
});
//# sourceMappingURL=Utils.js.map