import {ModelService} from './services/modelService/ModelService';
import {EventBus} from './services/eventBus/EventBus';
import {Elements} from './components/Elements';
import {IMetadata} from './interfaces/IMetadata';

export class App {
    constructor() {
        let modelData = {
            gameSetting: {
                playerNo: 2,
                maxPlayerNo: 4,
                minPlayerNo: 2,
                initTimeCounter: 60,
                timeCounter: 60,
                initPlayingCounterTime: 5,
                isEndSoundPlaying: false,
                isGameStarted: false,
            }
        };
        let jsonTemplate: IMetadata = {
            "context": "gameSetting",
            "element": "container-control",
            "children": [
                {
                    "element": "header-toolbox"
                },
                {
                    "element": "label-control",
                    "context": "playerNo"
                },
                {
                    "element": "text-field",
                    "context": "playerNo"
                },
                {
                    "element": "text-field",
                    "context": "timeCounter"
                },
                {
                    "element": "button-control",
                    "context": "isGameStarted"
                }
            ]
        };

        let eventBus = new EventBus();
        let modelService = new ModelService(modelData);

        const mainContainer = new Elements['container-control']({
            children: [jsonTemplate]
        }, eventBus);

        mainContainer.setData(modelService.getModel());
        mainContainer.render(document.body);
    };
}
