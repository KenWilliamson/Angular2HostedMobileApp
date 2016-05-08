import {
    describe,
    expect,
    it
} from '@angular/core/testing';
import {HeroDetailsComponent} from '../../hero/hero-details.component';
describe('HeroDetailsComponent', () => {
    it('is not undefined', () => {
        let c = new HeroDetailsComponent();
        expect(c).not.toEqual(undefined);

        //expect(null).not.toEqual(undefined);

    });

    it('is has a title', () => {
        let c = new HeroDetailsComponent();
        //expect(app).not.toEqual(undefined)
        expect(c.getTitle()).toEqual("Hero Details");
        //expect(null).not.toEqual(undefined)
    });
});


