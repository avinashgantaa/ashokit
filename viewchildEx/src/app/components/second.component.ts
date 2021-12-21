import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'second',
  templateUrl: './second.component.html',
  styles: [
  ]
})
export class SecondComponent implements OnInit {
  public varOne:any;
  public varTwo:any;

  constructor() {
    this.varOne="hello world 1";
    this.varTwo="hello world 2";
   }

  ngOnInit(): void {
  }

}
