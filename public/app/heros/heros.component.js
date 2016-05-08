System.register(['@angular/core', './services/heros.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, heros_service_1;
    var HerosComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (heros_service_1_1) {
                heros_service_1 = heros_service_1_1;
            }],
        execute: function() {
            HerosComponent = (function () {
                function HerosComponent(_heroService) {
                    this._heroService = _heroService;
                    this.title = 'Heros';
                }
                ;
                HerosComponent.prototype.ngOnInit = function () {
                };
                HerosComponent.prototype.getTitle = function () {
                    return this.title;
                };
                HerosComponent.prototype.error = function (err) {
                    console.log("Heors service error: " + err);
                };
                HerosComponent = __decorate([
                    core_1.Component({
                        selector: 'hero-list',
                        templateUrl: "../templates/heros.html",
                        directives: [],
                        providers: [
                            heros_service_1.HeroService
                        ]
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof heros_service_1.HeroService !== 'undefined' && heros_service_1.HeroService) === 'function' && _a) || Object])
                ], HerosComponent);
                return HerosComponent;
                var _a;
            })();
            exports_1("HerosComponent", HerosComponent);
        }
    }
});
//# sourceMappingURL=heros.component.js.map