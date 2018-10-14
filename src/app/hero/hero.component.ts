import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  title = "sample appliction";

  heros: Hero[];
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeros();
  }


  getHeros(): void {
      this.heroService.getHeros().subscribe(heros => { 
       this.heros = heros
       console.log(heros);
     });
     
  }


}
