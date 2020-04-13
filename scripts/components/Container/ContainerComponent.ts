import { AbstractComponent } from '../AbstractComponent/AbstractComponent';
import { IMetadata } from '../../interfaces/IMetadata';
import { Elements } from '../Elements';

export class Container extends AbstractComponent {
    protected build(): void {
        this.componentElement = document.createElement('div') as HTMLElement;
        if (this.metadata.children) {
            this.metadata.children.forEach((childMetadata: IMetadata) => {
                const child = new Elements[childMetadata.element](
                    childMetadata,
                    this.eventBus,
                    this.path ? `${this.path}.${childMetadata.context}` : childMetadata.context
                );
                child.setData(this.model);
                child.render(this.componentElement);
            });
        }
    }

    public updateView(): void {
        return null;
    }
}
