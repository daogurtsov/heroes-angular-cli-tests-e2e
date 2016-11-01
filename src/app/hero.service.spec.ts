/* tslint:disable:no-unused-variable */

import { TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { HeroService } from './hero.service';
import { FakeHeroService } from './testing/fake.hero.service';
import {HEROES} from './shared/mock-heroes'
describe('Service: Hero', () => {
  beforeEach(() => {
    let fakeHeroService = new FakeHeroService()
    TestBed.configureTestingModule({
      providers:    [ {provide: HeroService, useValue: fakeHeroService } ]
    });
  });

  it('should ...', inject([HeroService], (service: HeroService) => {
    expect(service).toBeTruthy();
  }));

  it('Get heroes call', inject([HeroService], (service: HeroService) => {
    service.getHeroes().then((response) => {
      expect(response).toEqual(HEROES);
    });
  }));

});
