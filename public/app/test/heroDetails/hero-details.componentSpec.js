System.register(['@angular/core/testing', '../../hero/hero-details.component'], function(exports_1) {
    var testing_1, hero_details_component_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (hero_details_component_1_1) {
                hero_details_component_1 = hero_details_component_1_1;
            }],
        execute: function() {
            testing_1.describe('HeroDetailsComponent', function () {
                testing_1.it('is not undefined', function () {
                    var c = new hero_details_component_1.HeroDetailsComponent();
                    testing_1.expect(c).not.toEqual(undefined);
                });
                testing_1.it('is has a title', function () {
                    var c = new hero_details_component_1.HeroDetailsComponent();
                    testing_1.expect(c.getTitle()).toEqual("Hero Details");
                });
            });
        }
    }
});
//# sourceMappingURL=hero-details.componentSpec.js.map