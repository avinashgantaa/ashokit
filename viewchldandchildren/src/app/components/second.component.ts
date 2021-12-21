import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'second',
  templateUrl: './second.component.html',
  styles: [
  ]
})
export class SecondComponent implements OnInit {
  public varone:any;
  public vartwo:any;

  constructor(){
    this.varone="hello world";
    this.vartwo="ever green";
   }

  ngOnInit(): void {
  }

}
