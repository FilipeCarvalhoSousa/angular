import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  {{valor}}
  <button (click)="adicionar()">Add</button>
  <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  
  public valor: number = 1;
  
  constructor(){
  }

  public adicionar(): number {
    return this.valor += 1;
  }
  ngOnInit(): void {
    console.log('Init');
  }

  ngAfterContentChecked(): void {
    console.log('afterContentCheck');
  }

  ngAfterContentInit(): void {
    console.log('afterContentInit');
  }
  
  ngAfterViewChecked(): void {
    console.log('afterViewChecked');
  }
  ngAfterViewInit(): void {
    console.log('afterViewInit');
  }
  ngDoCheck(): void {
    console.log('doCheck');
  }
}
