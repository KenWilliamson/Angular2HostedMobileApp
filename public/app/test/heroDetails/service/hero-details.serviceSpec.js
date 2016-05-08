System.register(['@angular/core/testing', '../../../hero/services/hero-details.service'], function(exports_1) {
    var testing_1, hero_details_service_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (hero_details_service_1_1) {
                hero_details_service_1 = hero_details_service_1_1;
            }],
        execute: function() {
            testing_1.describe('HeroDetailsService', function () {
                testing_1.it('is not undefined', function () {
                    var ser = new hero_details_service_1.HeroDetailsService();
                    testing_1.expect(ser).not.toEqual(undefined);
                });
                testing_1.it('has a hero details', function () {
                    var ser = new hero_details_service_1.HeroDetailsService();
                    hero = ser.getHeroDetails(12);
                    testing_1.expect(hero.entered.getMonth()).toBe(6);
                    testing_1.expect(hero.entered.getDate()).toBe(17);
                });
            });
        }
    }
});
//# sourceMappingURL=hero-details.serviceSpec.js.map