import { Component } from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {HeroesComponent} from './heroes/heroes.component';
import {HeroDetailsComponent} from './hero/hero-details.component';
@Component({
    selector: 'cloud-app',
    templateUrl: "../templates/main.html",

    directives: [
        ROUTER_DIRECTIVES
    ],
    providers: [
        ROUTER_PROVIDERS
    ]

})

@RouteConfig([
    {
        path: '/',
        name: 'Heros',
        component: HeroesComponent
    },
    {
        path: '/detail/:id',
        name: 'HeroDetails',
        component: HeroDetailsComponent
    }
])

export class AppComponent {
    title = 'CloudMobileCordova';
    constructor(

    ) { };
    getTitle() {
        return this.title;
    }
}



