System.register(['@angular/core', './services/domain-list.service', '@angular/router-deprecated'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, domain_list_service_1, router_deprecated_1;
    var HeroComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (domain_list_service_1_1) {
                domain_list_service_1 = domain_list_service_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            }],
        execute: function() {
            HeroComponent = (function () {
                function HeroComponent(_router, _heroService) {
                    this._router = _router;
                    this._heroService = _heroService;
                    this.title = 'Heros';
                }
                ;
                HeroComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._heroService.getHeros()
                        .subscribe(function (res) { return _this.heros = res; }, function (error) { return _this.error(error); });
                };
                HeroComponent.prototype.getTitle = function () {
                    return this.title;
                };
                HeroComponent.prototype.error = function (err) {
                    console.log("Heors service error: " + err);
                };
                HeroComponent = __decorate([
                    core_1.Component({
                        selector: 'hero-list',
                        templateUrl: "../templates/heros.html",
                        directives: [
                            router_deprecated_1.ROUTER_DIRECTIVES
                        ],
                        providers: [
                            domain_list_service_1.HeroService
                        ]
                    }), 
                    __metadata('design:paramtypes', [router_deprecated_1.Router, (typeof (_a = typeof domain_list_service_1.HeroService !== 'undefined' && domain_list_service_1.HeroService) === 'function' && _a) || Object])
                ], HeroComponent);
                return HeroComponent;
                var _a;
            })();
            exports_1("HeroComponent", HeroComponent);
        }
    }
});
//# sourceMappingURL=heres.component.js.map