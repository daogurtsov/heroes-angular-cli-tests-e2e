/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail.component';

describe('Component: HeroDetail', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeroDetailComponent
      ],
      imports:[FormsModule]
  });
  });
  
  it('should create an instance', async(() => {
    let fixture = TestBed.createComponent(HeroDetailComponent);
    let heroDetail = fixture.debugElement.componentInstance;
    expect(heroDetail).toBeTruthy();
  }));

});
