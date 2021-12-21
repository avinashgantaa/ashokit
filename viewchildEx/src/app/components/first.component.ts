import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import {SecondComponent} from './second.component';

@Component({
  selector: 'first',
  templateUrl: './first.component.html',
  styles: [
  ]
})
export class FirstComponent implements OnInit {
  // @ViewChild(SecondComponent) public _second:SecondComponent;

  @ViewChildren(SecondComponent) 
  public map:QueryList<SecondComponent>=new QueryList();
  public arr:any[]=[];
  ngAfterViewInit(){
    this.arr=this.map.toArray();
  }

  constructor() { }

  ngOnInit(): void {
  }
  changeFn():any{
    for(let i:number=0;i<this.arr.length;i++){
      if(i==0){
        this.arr[i].varOne="Angular 12";
        this.arr[i].varTwo="Angular 13";
      }

      if(i==1){
        this.arr[i].varOne="react 12";
        this.arr[i].varTwo="react 13";
      }
      if(i==2){
        this.arr[i].varOne="node 12";
        this.arr[i].varTwo="node 13";
      }


    }
  }
  // changeFn():any{
  //   this._second.varOne="welcome 1";
  //   this._second.varTwo="welcome 2";
  // }

}
