import { Injectable } from '@angular/core';
import {Hero} from './shared/hero';
import {HEROES} from './shared/mock-heroes';

@Injectable()
export class HeroService {

  constructor() { }
getHeroes(): Promise<Hero[]> {
  return Promise.resolve(HEROES);
}
}
