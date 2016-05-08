// Turn on full stack traces in errors to help debugging
Error.stackTraceLimit = Infinity;


jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000;

// // Cancel Karma's synchronous start,
// // we will call `__karma__.start()` later, once all the specs are loaded.
__karma__.loaded = function () {};


System.config({
    packages: {
        'base/public/app': {
            defaultExtension: false,
            format: 'register',
            map: Object.keys(window.__karma__.files).
                    filter(onlyAppFiles).
                    reduce(function createPathRecords(pathsMapping, appPath) {

                        // creates local module name mapping to global path with karma's fingerprint in path, e.g.:
                        // './hero.service': '/base/src/app/hero.service.js?f4523daf879cfb7310ef6242682ccf10b2041b3e'
                        var moduleName = appPath.replace(/^\/base\/public\/app\//, './').replace(/\.js$/, '');
                        pathsMapping[moduleName] = appPath + '?' + window.__karma__.files[appPath]
                        return pathsMapping;
                    }, {})

        }
    }
});

System.import('@angular/platform-browser/src/browser/browser_adapter').then(function (browser_adapter) {
    browser_adapter.BrowserDomAdapter.makeCurrent();
}).then(function () {
    return Promise.all(
            Object.keys(window.__karma__.files) // All files served by Karma.
            .filter(onlySpecFiles)
            //.map(filePath2moduleName)        // Normalize paths to module names.
            .map(function (moduleName) {
                // loads all spec files via their global module names (e.g. 'base/src/app/hero.service.spec')
                console.log("module: " + moduleName);
                return System.import(moduleName);
            }));
})
        .then(function () {
            __karma__.start();
        }, function (error) {
            __karma__.error(error.stack || error);
        });


function filePath2moduleName(filePath) {
    var returnVal = filePath.
            replace(/^\//, '').// remove / prefix
            replace(/\.\w+$/, '');           // remove suffix
    console.log("filePath2moduleName: " + returnVal);
    //returnVal = false;
    return returnVal;
}


function onlyAppFiles(filePath) {
    //console.log("onlyAppFiles file: " + filePath);
    var returnVal = /\/base\/public\/app\/(?!.*\Spec\.js$).*\.js$/.test(filePath);
    //console.log("onlyAppFiles: " + returnVal);
    return returnVal;
}


function onlySpecFiles(path) {
    console.log("onlySpecFiles path: " + path);
    var returnVal = /Spec\.js$/.test(path);
    console.log("onlySpecFiles: " + returnVal);
    return returnVal;
}