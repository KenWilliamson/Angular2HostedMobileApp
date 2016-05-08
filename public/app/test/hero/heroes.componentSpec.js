System.register(['@angular/core/testing', '../../heroes/heroes.component'], function(exports_1) {
    var testing_1, heroes_component_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (heroes_component_1_1) {
                heroes_component_1 = heroes_component_1_1;
            }],
        execute: function() {
            testing_1.describe('HeroesComponent', function () {
                testing_1.it('is not undefined', function () {
                    var c = new heroes_component_1.HeroesComponent();
                    testing_1.expect(c).not.toEqual(undefined);
                });
                testing_1.it('is has a title', function () {
                    var c = new heroes_component_1.HeroesComponent();
                    testing_1.expect(c.getTitle()).toEqual("Heroes");
                });
            });
        }
    }
});
//# sourceMappingURL=heroes.componentSpec.js.map