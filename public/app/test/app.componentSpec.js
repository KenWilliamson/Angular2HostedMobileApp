System.register(['@angular/core/testing', '../app.component'], function(exports_1) {
    var testing_1, app_component_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }],
        execute: function() {
            testing_1.describe('AppComponent', function () {
                testing_1.it('is not undefined', function () {
                    var app = new app_component_1.AppComponent();
                    testing_1.expect(app).not.toEqual(undefined);
                });
                testing_1.it('is has a title', function () {
                    var app = new app_component_1.AppComponent();
                    testing_1.expect(app.getTitle()).toEqual("CloudMobileCordova");
                });
            });
        }
    }
});
//# sourceMappingURL=app.componentSpec.js.map