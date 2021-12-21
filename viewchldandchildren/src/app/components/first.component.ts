import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import {SecondComponent} from './second.component';

@Component({
  selector: 'first',
  templateUrl: './first.component.html',
  styles: [
  ]
})
export class FirstComponent implements OnInit {
  @ViewChild(SecondComponent) public second:SecondComponent;
  @ViewChild("uname") uname:ElementRef=new ElementRef(null);
  // @ViewChildren(SecondComponent) public map:QueryList<any>=new QueryList()
  // public arr:any[]=[];


  // ngAfterViewInit(){
  //   this.arr=this.map.toArray()
  // }
  onclick(){
    this.second.varone="Angular";
    this.second.vartwo="React js";

    this.uname.nativeElement.style.backgroundColor="green";

    // for(let i:number=0;i<this.arr.length;i++){
    //   if(i==0){
    //     this.arr[i].varone="ashok it";
    //     this.arr[i].vartwo="Naresh it";
    //   }
    //   if(i==1){
    //     this.arr[i].varone="satya tech";
    //     this.arr[i].vartwo="durga soft";
    //   }
    //   if(i==2){
    //     this.arr[i].varone="live tech";
    //     this.arr[i].vartwo="mind space";
    //   }

    // }

    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
