import { EventBus } from '../../services/eventBus/EventBus';
import { ModelService } from '../../services/modelService/ModelService';
import { IMetadata } from '../../interfaces/IMetadata';

export abstract class AbstractComponent {
    protected componentElement: HTMLElement;
    protected model: unknown;

    protected abstract build(): void;

    public abstract updateView(): void;

    constructor(
        protected metadata: IMetadata,
        protected eventBus: EventBus,
        protected path: string = 'data'
    ) {
    }

    public setData(model: unknown): void {
        this.model = model;
        ModelService.setProxy(this.path, model, this.eventBus);
        this.eventBus.on('modelChange', this.onModelChange);
    }

    protected onModelChange = (path: string): void => {
        if (this.isCurrentPath(path)) {
            this.updateView();
        }
    };

    protected isCurrentPath(path: string): boolean {
        return path === this.path;
    }

    public getData(propertyName: string = this.getPropertyName()): unknown {
        return this.getContext()[propertyName];
    }

    private getContext(): unknown {
        let pathArray = this.path.split('.'),
            context = this.model;
        pathArray.pop();
        pathArray.forEach((pathPart: string) => {
            if (context[pathPart]) {
                context = context[pathPart];
            } else {
                context = {};
            }
        });
        return context;
    }

    private getPropertyName(): string {
        let pathArray = this.path.split('.');
        return pathArray.pop();
    }

    public updateValue(value: unknown, propertyName: string = this.getPropertyName() ): void {
        this.getContext()[propertyName] = value;
    }

    public isBuilt(): boolean {
        return !!this.componentElement;
    }

    public render(host: HTMLElement): void {
        if (!this.isBuilt()) {
            this.build();
        }
        host.appendChild(this.componentElement);
    }
}






