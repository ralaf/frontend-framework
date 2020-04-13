(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./services/modelService/ModelService", "./services/eventBus/EventBus", "./components/Elements"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const ModelService_1 = require("./services/modelService/ModelService");
    const EventBus_1 = require("./services/eventBus/EventBus");
    const Elements_1 = require("./components/Elements");
    class App {
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
            let jsonTemplate = {
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
            let eventBus = new EventBus_1.EventBus();
            let modelService = new ModelService_1.ModelService(modelData);
            const mainContainer = new Elements_1.Elements['container-control']({
                children: [jsonTemplate]
            }, eventBus);
            mainContainer.setData(modelService.getModel());
            mainContainer.render(document.body);
        }
        ;
    }
    exports.App = App;
});
//# sourceMappingURL=main.js.map