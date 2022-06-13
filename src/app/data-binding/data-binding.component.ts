import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {
  // Interpolation
  public nome: string = "Filipe";
  public idade: number = 31;
  public terra: boolean = true;
  //public ar: symbol = ;

  // Property Bindings
  public checkedDisable: boolean = false
  public imgSrc: string = "https://lh3.googleusercontent.com/KcmXnTILjIOzHOHFxhaHg3IUFiuZ1h9rpKDJim6SArhqlQQzMGA70lRQhp320MOSR_7O-dQz7LLGdJTvTkq8fHtMZwM=w640-h400-e365-rj-sc0x00ffffff"
  public imgTitle: string = "Property Bindings"

  // Event Binding
  public position: {x: number, y: number} = {x: 0,  y: 0}
  public alertaInfo(valor: string){
    alert(valor);
  } 

  public mouseMoveTeste(valor: MouseEvent){
    console.log(valor);
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
