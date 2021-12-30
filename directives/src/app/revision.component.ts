import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'direct',
  templateUrl: './revision.component.html',
  styles: [
  ]
})
export class RevisionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /*obj:any={"uname":"","upwd":""}
  result:string="";
  onclick():any{
   this.result=(this.obj.uname=="ashok" && this.obj.upwd=="ashok")?"login success":"login fail"
  }

  flag:boolean=true;
  */
 num:number=0;

}
