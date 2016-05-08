import {Injectable}     from '@angular/core';
import {Hero}           from '../../domain/hero';
import {HEROES} from '../../mock/heros.mock';

@Injectable()
export class HeroesService {
    constructor() { }
    heroes = HEROES;     
    getHeroes(): Hero[] {  
        return this.heroes;
    }    
}
