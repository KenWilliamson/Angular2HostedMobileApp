import {
    describe,
    expect,
    it
} from '@angular/core/testing';
import {HeroDetailsService} from '../../../hero/services/hero-details.service';
describe('HeroDetailsService', () => {
    it('is not undefined', () => {
        let ser = new HeroDetailsService();
        expect(ser).not.toEqual(undefined);
        //expect(null).not.toEqual(undefined);

    });

    it('has a hero details', () => {
        let ser = new HeroDetailsService();
       //expect(ser).not.toEqual(undefined)
        hero = ser.getHeroDetails(12);             
        expect(hero.entered.getMonth()).toBe(6);
        expect(hero.entered.getDate()).toBe(17);
        //expect(null).not.toEqual(undefined)
       
    });
});


