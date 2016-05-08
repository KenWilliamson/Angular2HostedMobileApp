module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        // Configure a mochaTest task 
        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        },
        ts: {
            default: {
                src: [
                    "./ts-app/**/*.ts"
                ],
                outDir: "public/app"
            },
            options: {
                fast: 'never',
                verbose: true,
                module: 'system',
                moduleResolution: 'node',
                experimentalDecorator: true,
                emitDecoratorMetadata: true,
                noImplicitAny: false,
                target: 'es5',
                failOnTypeErrors: false
            }
        }
    });


    
    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks('grunt-karma');
    grunt.registerTask("angular2-compile", ["ts"]);   
    grunt.registerTask('karma-test', 'karma');
    

};
