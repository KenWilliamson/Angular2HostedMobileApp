module.exports = function (config) {
    config.set({
        basePath: '',
        files: [
            //{pattern: 'node_modules/systemjs/dist/system-polyfills.js', watched: true, included: true},            

            'node_modules/es6-shim/es6-shim.js',
            'node_modules/reflect-metadata/Reflect.js',
            // System.js for module loading
            'node_modules/systemjs/dist/system-polyfills.js',
            'node_modules/systemjs/dist/system.src.js',
            // Zone.js dependencies
            'node_modules/zone.js/dist/zone.js',
            'node_modules/zone.js/dist/jasmine-patch.js',
            'node_modules/zone.js/dist/async-test.js',
            'node_modules/zone.js/dist/fake-async-test.js',
            // RxJs.
            {pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false},
            {pattern: 'node_modules/rxjs/**/*.js.map', included: false, watched: false},
            {pattern: './karma-test-shims.js', watched: true, included: true},
            {pattern: 'node_modules/@angular/**/*.js', included: false, watched: true},
            
            {pattern: 'node_modules/@angular/**/*.js.map', included: false, watched: true},
            {pattern: 'public/app/test/**/*Spec.js', watched: true, included: false},
            {pattern: 'public/app/**/*.js', watched: true, included: false}

            //"./karma-system-boot.js",
            //"public/app/test/**/*Spec.js"
        ],
        proxies: {
            // required for component assests fetched by Angular's compiler
            "/app/": "/base/public/app/"
        },
        exclude: [
        ],
        autoWatch: true,
        frameworks: [
            "jasmine"
        ],
        browsers: [
            "Chrome",
            "Firefox"
        ],
        plugins: [
            "karma-junit-reporter",
            "karma-chrome-launcher",
            "karma-firefox-launcher",
            "karma-jasmine",
            "karma-ng-html2js-preprocessor"
        ],
        preprocessors: {
            // source files, that you wanna generate coverage for
            // do not include tests or libraries
            // (these files will be instrumented by Istanbul)
            'public/app/test/**/*Spec.js': ['coverage']
        },
        reporters: ['progress', 'coverage'],
        coverageReporter: {
            type: 'html',
            dir: 'coverage/'
        }
    });
};
