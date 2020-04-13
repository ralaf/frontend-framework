import { EventBus } from '../eventBus/EventBus';
import { ProxyType } from '../../types/ProxyType';

export class ModelService {
    private modelObject: { data: unknown };

    constructor(data: unknown) {
        this.modelObject = { data };
    }

    public getModel(): { data: unknown } {
        return this.modelObject;
    }

    public static setProxy(path: string, data: unknown, eventBus: EventBus): void {
        let pathArray = path.split('.'),
            context = data,
            valueProperty = pathArray.pop(),
            contextProperty = pathArray.pop();

        pathArray.forEach((pathPart: string) => {
            if (context[pathPart]) {
                context = context[pathPart];
            } else {
                context = {};
            }
        });
        if (!contextProperty) {
            this.createProxy(context, valueProperty, eventBus, pathArray.join('.'));
        } else if (Array.isArray(context[contextProperty][valueProperty])) {
            this.createProxy(
                context[contextProperty],
                valueProperty,
                eventBus,
                `${contextProperty}${pathArray.length ? '.' + pathArray.join('.') : ''}`
            );
        } else {
            this.createProxy(context, contextProperty, eventBus, pathArray.join('.'));
        }
    }

    private static createProxy(context: unknown, valueProperty: string, eventBus: EventBus, path: string): void {
        if (context[valueProperty] instanceof ProxyType) {
            return;
        }
        context[valueProperty] = new Proxy(context[valueProperty], {
            getPrototypeOf: function (key) {
                return ProxyType.prototype;
            },
            set: (target: unknown, property: string, value: unknown): boolean => {
                target[property] = value;
                if (
                    !(value instanceof ProxyType) &&
                    (
                        !Array.isArray(target) || Array.isArray(target) && property !== 'length'
                    )
                ) {
                    console.log('change trigger',context , valueProperty);
                    eventBus.trigger<string>(
                        'modelChange',
                        `${path ? `${path}.` : ''}${valueProperty}.${property}`
                    )
                }
                return true;
            }
        });
    }
}
















