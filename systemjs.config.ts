SystemJS.config({
    baseURL: './',
    defaultExtension: 'js',
    // map tells the System loader where to look for things
    map: {
        text: './node_modules/systemjs-plugin-text/text.js',
        css: 'node_modules/systemjs-plugin-css/css.js'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
        '/': {
            defaultExtension: 'js'
        }
    }
});
