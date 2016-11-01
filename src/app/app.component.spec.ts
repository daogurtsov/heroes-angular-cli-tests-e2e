/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Hero } from './shared/hero';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { AppComponent } from './app.component';
import { FakeHeroService } from './testing/fake.hero.service';
import { HeroService } from './hero.service';

describe('App: HeroesWebpackTdd', () => {
  beforeEach(() => {
    let fakeHeroService = new FakeHeroService()
    TestBed.configureTestingModule({
      declarations: [
        HeroDetailComponent,
        AppComponent
      ],
      imports:[FormsModule],
      providers:    [ {provide: HeroService, useValue: fakeHeroService } ]
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('hero service injection check', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let app    = fixture.componentInstance;
    let heroService = TestBed.get(HeroService);
    expect(heroService.getTest()).toBeTruthy();
  }));

  it(`should have as title 'Tour of Heroe!'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Tour of Heroes');
  }));

  it(`should have as hero 'Mr. Nice'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    fixture.whenStable().then(() => { 
        fixture.detectChanges();        
        let app = fixture.debugElement.componentInstance;
        expect(app.selectedHero.name).toEqual('Mr. Nice');
  });
  }));

  it('should render title in a h1 tag', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Tour of Heroes');
  }));
  
  it('should render hero in a input tag', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    fixture.whenStable().then(() => { 
        fixture.detectChanges();        
        let compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('input').placeholder).toContain('name');
    });
  }));

});
