import { Component } from '@angular/core';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name:  string = 'Ironman';
  public age:   number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription():string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'Spiderman';
  }

  changeAge(): void {
    this.age = 25;
  }

  resetForm(): void {
    this.name = 'Ironman';
    this.age = 45;

    // document.querySelectorAll('h1')!.forEach(Element =>{
    //   Element.innerHTML = '<h1>Desde Angular</h1>';
    // }); /* en este caso hay que tener mucho cuidado al manipular los atributos de esta manera */
  }


}
