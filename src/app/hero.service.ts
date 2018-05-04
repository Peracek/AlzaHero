import { Injectable } from '@angular/core';
import { Hero } from './model/hero';

const heroes: Hero[] = [
  { id: 1, name: "Ylvis" },
  { id: 2, name: "React" },
  { id: 3, name: "My father" }
]

@Injectable()
export class HeroService {

  constructor() { }

  get(id?: Number) {
    if(id) {
      return [heroes.find(hero => hero.id === id)]
    } else {
      return heroes
    }
  }

}
