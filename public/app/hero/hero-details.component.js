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
    var HeroDetailsComponent;
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
            HeroDetailsComponent = (function () {
                function HeroDetailsComponent(_heroDetailsService, _routeParams) {
                    this._heroDetailsService = _heroDetailsService;
                    this._routeParams = _routeParams;
                    this.title = 'Hero Details';
                    this.errors = [];
                }
                ;
                HeroDetailsComponent.prototype.ngOnInit = function () {
                    this.id = this._routeParams.get('id');
                    this.hero = this._heroDetailsService.getHeroDetails(this.id);
                };
                HeroDetailsComponent.prototype.getTitle = function () {
                    return this.title;
                };
                HeroDetailsComponent.prototype.onCameraClicked = function () {
                    try {
                        navigator.camera.getPicture(onSuccess, onFail, {
                            quality: 50,
                            destinationType: Camera.DestinationType.FILE_URI
                        });
                        function onSuccess(imageURI) {
                            var image = document.getElementById('myImage');
                            image.src = imageURI;
                        }
                        function onFail(message) {
                            alert('Failed because: ' + message);
                        }
                    }
                    catch (err) {
                        this.errors.push(err.message);
                        console.log(err.message);
                    }
                };
                HeroDetailsComponent.prototype.onShowDevice = function () {
                    try {
                        this.dev = device.version;
                    }
                    catch (err) {
                        this.errors.push(err.message);
                    }
                };
                HeroDetailsComponent = __decorate([
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
                ], HeroDetailsComponent);
                return HeroDetailsComponent;
            })();
            exports_1("HeroDetailsComponent", HeroDetailsComponent);
        }
    }
});
//# sourceMappingURL=hero-details.component.js.map