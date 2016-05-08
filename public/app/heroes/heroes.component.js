System.register(['@angular/core', './services/heroes.service', '../pipes/custom-date.pipe', '@angular/router-deprecated'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, heroes_service_1, custom_date_pipe_1, router_deprecated_1;
    var HeroesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (heroes_service_1_1) {
                heroes_service_1 = heroes_service_1_1;
            },
            function (custom_date_pipe_1_1) {
                custom_date_pipe_1 = custom_date_pipe_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            }],
        execute: function() {
            HeroesComponent = (function () {
                function HeroesComponent(_heroesService) {
                    this._heroesService = _heroesService;
                    this.title = 'Heroes';
                }
                ;
                HeroesComponent.prototype.ngOnInit = function () {
                    this.heroes = this._heroesService.getHeroes();
                };
                HeroesComponent.prototype.getTitle = function () {
                    return this.title;
                };
                HeroesComponent = __decorate([
                    core_1.Component({
                        selector: 'hero-list',
                        templateUrl: "../templates/heroes.html",
                        pipes: [custom_date_pipe_1.CustomDatePipe],
                        directives: [
                            router_deprecated_1.ROUTER_DIRECTIVES
                        ],
                        providers: [
                            heroes_service_1.HeroesService
                        ]
                    }), 
                    __metadata('design:paramtypes', [heroes_service_1.HeroesService])
                ], HeroesComponent);
                return HeroesComponent;
            })();
            exports_1("HeroesComponent", HeroesComponent);
        }
    }
});
//# sourceMappingURL=heroes.component.js.map