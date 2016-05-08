System.register(['@angular/core', './services/hero-details.service', '../pipes/custom-date.pipe', '@angular/router-deprecated'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, hero_details_service_1, custom_date_pipe_1, router_deprecated_1;
    var HeroDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hero_details_service_1_1) {
                hero_details_service_1 = hero_details_service_1_1;
            },
            function (custom_date_pipe_1_1) {
                custom_date_pipe_1 = custom_date_pipe_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            }],
        execute: function() {
            HeroDetailComponent = (function () {
                function HeroDetailComponent(_heroDetailsService, _routeParams) {
                    this._heroDetailsService = _heroDetailsService;
                    this._routeParams = _routeParams;
                    this.title = 'Hero Details';
                }
                ;
                HeroDetailComponent.prototype.ngOnInit = function () {
                    this.id = this._routeParams.get('id');
                    this.hero = this._heroDetailsService.getHero(this.id);
                };
                HeroDetailComponent.prototype.getTitle = function () {
                    return this.title;
                };
                HeroDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'hero-list',
                        templateUrl: "../templates/hero-details.html",
                        pipes: [custom_date_pipe_1.CustomDatePipe],
                        directives: [],
                        providers: [
                            hero_details_service_1.HeroDetailsService
                        ]
                    }), 
                    __metadata('design:paramtypes', [hero_details_service_1.HeroDetailsService, router_deprecated_1.RouteParams])
                ], HeroDetailComponent);
                return HeroDetailComponent;
            })();
            exports_1("HeroDetailComponent", HeroDetailComponent);
        }
    }
});
//# sourceMappingURL=hero-details.component.js.map