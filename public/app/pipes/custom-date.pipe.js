System.register(['@angular/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var CustomDatePipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CustomDatePipe = (function () {
                function CustomDatePipe() {
                }
                CustomDatePipe.prototype.transform = function (value, format) {
                    if (value && format) {
                        try {
                            var rtn;
                            var month;
                            var day;
                            var year;
                            month = value.getMonth() + 1;
                            day = value.getDate();
                            year = value.getFullYear();
                            if (format === "MM/dd/yyyy") {
                                var mStr = month;
                                var dStr = day;
                                if (mStr < 10) {
                                    mStr = "0" + mStr;
                                }
                                if (dStr < 10) {
                                    dStr = "0" + dStr;
                                }
                                rtn = mStr + "/" + dStr + "/" + year;
                            }
                            else if (format === "MM-dd-yyyy") {
                                if (mStr < 10) {
                                    mStr = "0" + mStr;
                                }
                                if (dStr < 10) {
                                    dStr = "0" + dStr;
                                }
                                rtn = mStr + "-" + dStr + "-" + year;
                            }
                            else {
                                rtn = month + "/" + day + "/" + year;
                            }
                        }
                        catch (err) {
                            rtn = err.message;
                        }
                    }
                    else {
                        rtn = "";
                    }
                    return rtn;
                };
                CustomDatePipe = __decorate([
                    core_1.Pipe({ name: 'customDate' }), 
                    __metadata('design:paramtypes', [])
                ], CustomDatePipe);
                return CustomDatePipe;
            })();
            exports_1("CustomDatePipe", CustomDatePipe);
        }
    }
});
//# sourceMappingURL=custom-date.pipe.js.map