System.register(['@angular/core/testing', '../../heros/heros.component'], function(exports_1) {
    var testing_1, heros_component_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (heros_component_1_1) {
                heros_component_1 = heros_component_1_1;
            }],
        execute: function() {
            testing_1.describe('HerosComponent', function () {
                testing_1.it('is not undefined', function () {
                    var c = new heros_component_1.HerosComponent();
                    testing_1.expect(c).not.toEqual(undefined);
                });
                testing_1.it('is has a title', function () {
                    var c = new heros_component_1.HerosComponent();
                    testing_1.expect(c.getTitle()).toEqual("Heros");
                });
            });
        }
    }
});
//# sourceMappingURL=heros.componentSpec.js.map