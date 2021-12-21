import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'parent',
  templateUrl: './parent.component.html',
  styles: [
  ]
})
export class ParentComponent implements OnInit {
  public products:any[];
  myFun(data:any):any{
    console.log(data)
  }

  constructor() {
    this.products=[
      {"p_id":111,"p_name":"p_one","p_cost":1000},
      {"p_id":222,"p_name":"p_two","p_cost":2000},
      {"p_id":333,"p_name":"p_three","p_cost":3000},
      {"p_id":444,"p_name":"p_four","p_cost":4000},
      {"p_id":555,"p_name":"p_five","p_cost":5000}
    ]
   }

  ngOnInit(): void {
  }

}
