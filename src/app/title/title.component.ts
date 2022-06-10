import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnChanges, OnDestroy {
   
  public title: string = "Wecolme"
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
  }

  ngOnDestroy(): void {
    console.log('OnDestroy');
    
  }

}
