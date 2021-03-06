import { Component, OnInit } from '@angular/core';
import {Hero} from './hero';
import {HeroService} from './hero.service';
import {Router} from '@angular/router';


@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  styleUrls: ['heroes.component.css'],
  templateUrl: 'heroes.component.html',
  
})
export class HeroesComponent implements OnInit {
 
  selectedHero : Hero ;
  heroes :Hero[];

  constructor (
    private heroService: HeroService,
    private router: Router
    ){}

  ngOnInit():void{
    this.getHeroes();
  }

  getHeroes():void{
      this.heroService.getHeroes().then(heroes => this.heroes  =  heroes);
  }

  onSelect(hero: Hero):void{
    this.selectedHero = hero;
  }

  gotoDetail(): void  {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  addHero(hero:Hero){
    this.heroes.push(hero);
  }
}

