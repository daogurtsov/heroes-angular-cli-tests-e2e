import { Component, OnInit, Input} from '@angular/core';
import {Hero} from '../shared/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() hero: Hero;
}
