import { Injectable } from '@angular/core';
import { Hero } from './model/hero';

const heroes: Hero[] = [
  { id: 1, name: "Ylvis" },
  { id: 2, name: "React" },
  { id: 3, name: "My father" },
  { id: 4, name: "Anežka" },
  { id: 5, name: "Circular saw"},
  { id: 6, name: "Angle grinder" },
  { id: 7, name: "NTK" }
]

@Injectable()
export class HeroService {

  constructor() { }

  get(id?: number) {
    if(id) {
      return [heroes.find(hero => hero.id === id)]
    } else {
      return heroes
    }
  }

  topN(limit: number) {
    return [...heroes]
      .sort((a, b) => a.name.localeCompare(b.name))
      .slice(0, limit)
  }

}
