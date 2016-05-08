import {
    describe,
    expect,
    it
} from '@angular/core/testing';
import {HeroesComponent} from '../../heroes/heroes.component';
describe('HeroesComponent', () => {
    it('is not undefined', () => {
        let c = new HeroesComponent();
        expect(c).not.toEqual(undefined);

        //expect(null).not.toEqual(undefined);

    });

    it('is has a title', () => {
        let c = new HeroesComponent();
        //expect(app).not.toEqual(undefined)
        expect(c.getTitle()).toEqual("Heroes");
        //expect(null).not.toEqual(undefined)
    });
});


