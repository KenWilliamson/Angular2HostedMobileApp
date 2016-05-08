import { Component } from '@angular/core';
import {HeroDetailsService}   from './services/hero-details.service';
import {Hero} from "../domain/hero";
import { CustomDatePipe } from '../pipes/custom-date.pipe';
import { RouteParams } from '@angular/router-deprecated';

@Component({
    selector: 'hero-list',
    templateUrl: "../templates/hero-details.html",
        
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
    errors = [];
    dev:string;

    constructor(
        //private _router: Router,
        private _heroDetailsService: HeroDetailsService,
        private _routeParams: RouteParams
    ) { };

    ngOnInit() {
        this.id = this._routeParams.get('id');
        this.hero = this._heroDetailsService.getHeroDetails(this.id);
    }

    getTitle() {
        return this.title;
    }

    onCameraClicked() {
        //alert("clicked");
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
        } catch (err) {
            this.errors.push(err.message);
            console.log(err.message);
        }

    }
    
    onShowDevice(){
        try{
             this.dev = device.version;
        }catch(err){
            this.errors.push(err.message);
        }
       
    }
}




