declare const SystemJS;

SystemJS.import('./scripts/main.js').then(function (mainModule) {
    let container = document.getElementById('main-container'),
        instance = new mainModule.App(container);
});
