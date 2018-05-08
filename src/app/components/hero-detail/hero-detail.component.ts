import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../../hero.service';
import { Hero } from '../../model/hero';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero: Hero

  heroForm = new FormGroup ({
    name: new FormControl()
  })

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')
    ;[this.hero] = this.heroService.get(id)
    this.rebuildForm()
  }

  rebuildForm() {
    this.heroForm.reset({
      name: this.hero.name
    })
  }

  onSubmit() {
    console.log(this.heroForm.value)
    this.hero.name = this.heroForm.value.name
  }

  back() {
    console.log("back hit")
  }

}
