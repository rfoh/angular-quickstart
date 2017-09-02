import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'hero-detail',
  template: `
    <div *ngIf="hero">
      <h2>{{hero.name}} - detalhe:</h2>
      <div><label>número: </label>{{hero.id}}</div>
      <div>
        <label>nome: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
      </div>
    </div>
  `
})

export class HeroDetailComponent {
  @Input() hero: Hero;
}
