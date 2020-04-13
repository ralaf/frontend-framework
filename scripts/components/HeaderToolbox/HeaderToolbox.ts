import * as template from './HeaderToolbox.html!text';
import * as stylesheet from './HeaderToolbox.css!text';
import {Utils} from "../../Utils/Utils";
import {AbstractComponent} from "../AbstractComponent/AbstractComponent";

export class HeaderToolbox extends AbstractComponent {
    public build(): void {
        this.componentElement = Utils.createElementFromTemplate(template as unknown as string, stylesheet as unknown as string) as HTMLElement;

        this.updateView();
    }

    public updateView(): void {

    }
}
