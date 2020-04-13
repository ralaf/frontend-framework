import {parseCSS} from '../../node_modules/css-parser/dist/index';

export class Utils {
    public static createElementFromTemplate(template: string, stylesheet?: string): HTMLElement {
        const element: HTMLElement = document.createRange().createContextualFragment(template).firstChild as HTMLElement;
        return this.stylization(element, stylesheet);
    }


    private static stylization(element: HTMLElement, stylesheet?: string): HTMLElement {
        if (stylesheet) {
            let parsedStylesheet = parseCSS(stylesheet),
                squareBracketsRegex = /\[(.*)\]/;
            for (let style of parsedStylesheet) {
                if (style.selector.match(squareBracketsRegex)) {
                    for (let rule of style.rules) {
                        element.style[rule.key] = rule.value;
                    }
                } else if (element.outerHTML.match(style.selector)) {
                    for (let rule of style.rules) {
                        element.style[rule.key] = rule.value;
                    }
                }
            }
        }
        return element;
    }

    public static findFirstByAttribute(
        container: HTMLElement | DocumentFragment,
        attribute: string,
        value?: string
    ): HTMLElement | null {
        if (container instanceof HTMLElement && container.hasAttribute(attribute)) {
            return container;
        }
        return this.getFirstByAttributeInDOMLevel(
            this.getChildrenOfElements([container] as HTMLElement[]),
            attribute,
            value
        );
    }

    private static getFirstByAttributeInDOMLevel(
        elements: HTMLElement[],
        attribute: string,
        value?: string
    ): HTMLElement | null {
        if (!elements.length) {
            return null;
        }
        for (let element of elements) {
            if (element.hasAttribute(attribute)) {
                if (value) {
                    if (value === element.getAttribute(attribute)) {
                        return element;
                    }
                } else {
                    return element;
                }
            }
        }
        return this.getFirstByAttributeInDOMLevel(this.getChildrenOfElements(elements), attribute, value);
    }

    private static getChildrenOfElements(elements: HTMLElement[]): HTMLElement[] {
        let children: HTMLElement[] = [];
        elements.forEach((element: HTMLElement) => {
            children = children.concat(Array.from(element.children) as HTMLElement[]);
        });
        return children;
    }
}


