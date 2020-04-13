import * as template from './ButtonControl.html!text';
import { AbstractComponent } from '../AbstractComponent/AbstractComponent';
import { Utils } from '../../utils/Utils';
import * as stylesheet from "*.css!text";

export class ButtonControl extends AbstractComponent {
    private buttonControl: HTMLButtonElement;

    public build(): void {
        this.componentElement = Utils.createElementFromTemplate(template as unknown as string);
        this.buttonControl = Utils.findFirstByAttribute(
            this.componentElement,
            'data-button-control'
        ) as HTMLButtonElement;
        this.buttonControl.addEventListener('click', () => {
            // this.setData(!this.getData());
            // console.log(this,(this.getData()));
            if (this.getData() !== this.buttonControl.innerText) {
                const value = this.getData();
                this.updateValue(!value)


               const interval = setInterval(()=> {
                   const time = this.getData('timeCounter') as number - 1;
                    this.updateValue( this.getData('timeCounter') as number - 1, 'timeCounter')
                    this.updateView();

                    if(time === 0) {
                        clearInterval(interval)
                    }

                }, 1000)
            }
        });

        this.updateView();
    }

    public updateView(): void {
        this.buttonControl.innerText = this.getData('timeCounter') as string;
    }
}
