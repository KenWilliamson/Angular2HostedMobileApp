System.register(['@angular/core', '../../mock/heros.mock'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, heros_mock_1;
    var HeroDetailsService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (heros_mock_1_1) {
                heros_mock_1 = heros_mock_1_1;
            }],
        execute: function() {
            HeroDetailsService = (function () {
                function HeroDetailsService() {
                    this.heroes = heros_mock_1.HEROES;
                }
                HeroDetailsService.prototype.getHeroDetails = function (id) {
                    console.log("Id passed: " + id);
                    var hero = {};
                    for (var cnt = 0; cnt < this.heroes.length; cnt++) {
                        if (this.heroes[cnt].id === id) {
                            hero = this.heroes[cnt];
                            break;
                        }
                    }
                    return hero;
                };
                HeroDetailsService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], HeroDetailsService);
                return HeroDetailsService;
            })();
            exports_1("HeroDetailsService", HeroDetailsService);
        }
    }
});
//# sourceMappingURL=hero-details.service.js.map