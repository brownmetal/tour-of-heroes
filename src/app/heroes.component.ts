import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from './hero';
import { HeroService } from './hero.service';
@Component({
  selector: 'my-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css'] 
})
export class heroesComponent implements OnInit{
  
  heroes;
  constructor(private router: Router, private heroService: HeroService){
    
  }
  title = 'Tour Of Heroes';
  selectedHero: Hero;
  onSelect(hero){
    this.selectedHero=hero;
  }
  getHeroes():void {
    this.heroService.getHeroes().then(heroes=>this.heroes=heroes);
  }
  ngOnInit(){
    this.getHeroes();
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
  goDashboard(): void {
    this.router.navigate(['/dashboard']);
  }
 }
