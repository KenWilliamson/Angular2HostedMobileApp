import {
    describe,
    expect,
    it
} from '@angular/core/testing';
import {HeroesService} from '../../../heroes/services/heroes.service';
describe('HeroesService', () => {
    it('is not undefined', () => {
        let ser = new HeroesService();
        expect(ser).not.toEqual(undefined);
        //expect(null).not.toEqual(undefined);

    });

    it('has a list of Heros', () => {
        let ser = new HeroesService();
       //expect(ser).not.toEqual(undefined)
        heroes = ser.getHeroes();
        expect(heroes.length).toBe(10);        
        expect(heroes[1].entered.getMonth()).toBe(6);
        expect(heroes[1].entered.getDate()).toBe(17);
        //expect(null).not.toEqual(undefined)
       
    });
});


