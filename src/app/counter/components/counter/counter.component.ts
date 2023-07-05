import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }} </h3>

<!-- <button (click)="increaceBy()">+1</button> puede ser asi
<button (click)="decreaceBy()">-1</button> -->
    <button (click)="increaceBy(+1)">+1</button>
    <button (click)="resetBy()">Reset</button>
    <button (click)="increaceBy(-1)">-1</button>
  `,
})
export class CounterComponent {
  public title: string = 'Hola Mundo';
  public counter: number = 10;

  // increaceBy (): void  {
  //   this.counter += 1;

  // }
                                  // puede ser asi o
  // decreaceBy (): void {
  //   this.counter -= 1;
  // }
  increaceBy (value:number): void {  // o asi
    this.counter += value;
  }

  // resetBy (value: number= 10): void {  //puede ser asi o
  //   this.counter = value;
  // }
  resetBy () {  //o asi
    this.counter = 10;
  }

}
