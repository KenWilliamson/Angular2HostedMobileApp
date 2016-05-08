System.register(['@angular/core/testing', '../../../heroes/services/heroes.service'], function(exports_1) {
    var testing_1, heroes_service_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (heroes_service_1_1) {
                heroes_service_1 = heroes_service_1_1;
            }],
        execute: function() {
            testing_1.describe('HeroesService', function () {
                testing_1.it('is not undefined', function () {
                    var ser = new heroes_service_1.HeroesService();
                    testing_1.expect(ser).not.toEqual(undefined);
                });
                testing_1.it('has a list of Heros', function () {
                    var ser = new heroes_service_1.HeroesService();
                    heroes = ser.getHeroes();
                    testing_1.expect(heroes.length).toBe(10);
                    testing_1.expect(heroes[1].entered.getMonth()).toBe(6);
                    testing_1.expect(heroes[1].entered.getDate()).toBe(17);
                });
            });
        }
    }
});
//# sourceMappingURL=heroes.serviceSpec.js.map