import { Component } from '@angular/core';
import {HeroesService}   from './services/heroes.service';
import {Hero} from "../domain/hero";
import { CustomDatePipe } from '../pipes/custom-date.pipe';
import {ROUTER_DIRECTIVES} from '@angular/router-deprecated';

@Component({
    selector: 'hero-list',
    templateUrl: "templates/heroes.html",

    pipes: [CustomDatePipe],

    directives: [
        ROUTER_DIRECTIVES
    ],
    providers: [
        HeroesService
    ]
})

export class HeroesComponent implements OnInit {
    title = 'Heroes';

    heroes: Hero[];

    constructor(
        //private _router: Router,
        private _heroesService: HeroesService
    ) { };

    ngOnInit() {
        this.heroes = this._heroesService.getHeroes();
    }

    getTitle() {
        return this.title;
    }
}




