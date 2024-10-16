import { Component } from "@angular/core";



@Component({
  selector: 'app-counter',
  template: `
  <h1>{{title}}</h1>
  <hr>
  <h3>Counter: {{counter}}</h3>

  <button (click)="increaseBy(1)" >+1</button>
  <button (click)="reset()" >Reset</button>
  <button (click)="increaseBy(-1)" >-1</button>
  `,
})
export class CounterComponent {
  public title: string = 'Hola Counter';
  public counter: number = 10;

  increaseBy(value: number): void {
    this.counter += value;
  }

  reset(): void {
    this.counter = 10;
  }
}
