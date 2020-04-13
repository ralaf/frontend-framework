import * as template from './LabelField.html!text';
import { AbstractComponent } from '../AbstractComponent/AbstractComponent';
import { Utils } from '../../utils/Utils';

export class LabelField extends AbstractComponent {
    private valueElement: HTMLElement;

    public build(): void {
        this.componentElement = Utils.createElementFromTemplate(template as unknown as string) as HTMLElement;
        this.valueElement = Utils.findFirstByAttribute(this.componentElement, 'data-label-container');
        this.updateView();
    }

    public updateView(): void {
        this.valueElement.innerText = this.getData() as string;
    }
}
