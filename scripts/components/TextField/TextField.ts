import { Utils } from '../../utils/Utils';
import * as template from './TextField.html!text';
import { AbstractComponent } from '../AbstractComponent/AbstractComponent';

export class TextField extends AbstractComponent{
    private inputElement: HTMLInputElement;

    public build(): void {
        this.componentElement = Utils.createElementFromTemplate(template as unknown as string);
        this.inputElement = Utils.findFirstByAttribute(
            this.componentElement,
            'data-text-field-component-input'
        ) as HTMLInputElement;
        this.inputElement.addEventListener('keyup', () => {
            if (this.getData() !== this.inputElement.value) {
                this.updateValue(this.inputElement.value)
            }
        });
        this.updateView();
    }

    public updateView(): void {
        this.inputElement.value = this.getData() as string;
    }
}














