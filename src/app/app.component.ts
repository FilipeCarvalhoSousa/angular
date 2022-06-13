import {Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-data-binding></app-data-binding>
  <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {
  
  public destruir: boolean = true;
  
  constructor(){}

  ngOnInit(): void {
  }

  public destruirComponente() {
    this.destruir = false
  }

 }
