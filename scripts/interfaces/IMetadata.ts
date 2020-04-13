import { TElement } from '../types/TElement';

export interface IMetadata {
    context?: string,
    element?: keyof typeof TElement,
    children?: IMetadata[];
}
