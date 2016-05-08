System.register(['@angular/core', '@angular/router-deprecated', './heroes/heroes.component', './hero/hero-details.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_deprecated_1, heroes_component_1, hero_details_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (heroes_component_1_1) {
                heroes_component_1 = heroes_component_1_1;
            },
            function (hero_details_component_1_1) {
                hero_details_component_1 = hero_details_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'CloudMobileCordova';
                }
                ;
                AppComponent.prototype.getTitle = function () {
                    return this.title;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'cloud-app',
                        templateUrl: "../templates/main.html",
                        directives: [
                            router_deprecated_1.ROUTER_DIRECTIVES
                        ],
                        providers: [
                            router_deprecated_1.ROUTER_PROVIDERS
                        ]
                    }),
                    router_deprecated_1.RouteConfig([
                        {
                            path: '/',
                            name: 'Heros',
                            component: heroes_component_1.HeroesComponent
                        },
                        {
                            path: '/detail/:id',
                            name: 'HeroDetails',
                            component: hero_details_component_1.HeroDetailsComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map