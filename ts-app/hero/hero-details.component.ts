import { Component, ChangeDetectorRef } from '@angular/core';
import {HeroDetailsService}   from './services/hero-details.service';
import {Hero} from "../domain/hero";
import { CustomDatePipe } from '../pipes/custom-date.pipe';
import { RouteParams } from '@angular/router-deprecated';
import { NgForm }    from '@angular/common';

@Component({
    selector: 'hero-list',
    templateUrl: "templates/hero-details.html",

    pipes: [CustomDatePipe],

    directives: [

    ],
    providers: [
        HeroDetailsService
    ]
})

export class HeroDetailsComponent implements OnInit {
    title = 'Hero Details';

    hero: Hero;

    id: Number;
    
    //@Input() addItemStream:Observable<any>;
    error: string;
    
    dev: string;
    deviceReady: boolean;

    constructor(
        //private _router: Router,
        private _heroDetailsService: HeroDetailsService,
        private _routeParams: RouteParams,
        private _cd: ChangeDetectorRef
    ) { };

    ngOnInit() {
        this.id = this._routeParams.get('id');
        this.hero = this._heroDetailsService.getHeroDetails(this.id);
        this.deviceReady = isDeviceReady();
    }

    getTitle() {
        return this.title;
    }

    onCameraClicked() {
        //alert("clicked");  
        try {
            let that = this;
            that._cd.markForCheck();
            navigator.camera.getPicture(onSuccess, onFail, {
                quality: 50,
                destinationType: Camera.DestinationType.FILE_URI
            });

            function onSuccess(imageURI) {
                var image = document.getElementById('myImage');
                image.src = imageURI;
            }

            function onFail(message) {
                //alert('Failed because: ' + message);
                that.error = message.toString();
                that._cd.detectChanges();
            }
        } catch (err) {
            this.error = err.toString();
        }
    }

    onShowDevice() {
        try {
            this.dev = "Mobile version: " + device.version;
        } catch (err) {
            alert('Failed because: ' + err);
            this.error = err.message;
        }

    }
}




