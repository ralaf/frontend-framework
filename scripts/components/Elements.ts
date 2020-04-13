import { AbstractComponent } from './AbstractComponent/AbstractComponent';
import { IMetadata } from '../interfaces/IMetadata';
import { EventBus } from '../services/eventBus/EventBus';
import { TElement } from '../types/TElement';
import { HeaderToolbox } from './HeaderToolbox/HeaderToolbox';
import { LabelField } from './LabelField/LabelField';
import { TextField } from './TextField/TextField';
import { Container } from './Container/ContainerComponent';
import { ButtonControl} from './ButtonControl/ButtonControl';

interface IComponentClass {
    new(metadata: IMetadata, eventBus: EventBus, path?: string): AbstractComponent
}

export const Elements: { [key in keyof typeof TElement]: IComponentClass } = {
    'label-control': LabelField,
    'text-field': TextField,
    'container-control': Container,
    'header-toolbox': HeaderToolbox,
    'button-control': ButtonControl
};
