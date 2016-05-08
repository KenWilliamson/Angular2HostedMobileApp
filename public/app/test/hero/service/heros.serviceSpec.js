System.register(['@angular/core/testing', '../../../heros/services/heros.service'], function(exports_1) {
    var testing_1, heros_service_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (heros_service_1_1) {
                heros_service_1 = heros_service_1_1;
            }],
        execute: function() {
            testing_1.describe('HerosService', function () {
                testing_1.it('is not undefined', function () {
                    var ser = new heros_service_1.HerosService();
                    testing_1.expect(ser).not.toEqual(undefined);
                });
                testing_1.it('has a list of Heros', function () {
                    var ser = new heros_service_1.HerosService();
                    heros = ser.getHeros();
                    testing_1.expect(heros.length).toBe(10);
                    testing_1.expect(heros[1].entered.getMonth()).toBe(6);
                    testing_1.expect(heros[1].entered.getDate()).toBe(17);
                });
            });
        }
    }
});
//# sourceMappingURL=heros.serviceSpec.js.map