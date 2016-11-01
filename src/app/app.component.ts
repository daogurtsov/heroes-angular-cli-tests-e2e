import { Component } from '@angular/core';
import { Hero } from './shared/hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;
  constructor(private heroService: HeroService) {
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => {this.heroes = heroes; this.selectedHero = this.heroes[0]});
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}
