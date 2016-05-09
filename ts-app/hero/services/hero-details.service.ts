import {Injectable}     from '@angular/core';
import {Hero}           from '../../domain/hero';
import {HEROES} from '../../mock/heroes.mock';

@Injectable()
export class HeroDetailsService {
    constructor() { }
    heroes = HEROES;     
    getHeroDetails(id: Number): Hero[] {  
        console.log("Id passed: " + id);
        let hero:Hero = {};
        for(var cnt=0; cnt < this.heroes.length; cnt++){
            if(this.heroes[cnt].id === id){
                hero = this.heroes[cnt];
                break;
            }
        }
        return hero;
    }    
}
