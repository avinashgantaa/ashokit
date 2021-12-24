import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public var_one:string;
  var_two:string="NODE JS";

  var_three:Date=new Date();
  var_four:number=100;

  var_five:any={"key1":"value1",
                "key2":"value2",
                "key3":"value3"}

  var_six:any[]=[10,20,30,40,50];
  var_seven:any=100.12345;
  var_eight:any;

  custompipe:string="Hello";


  constructor(){
    this.var_one="angular js";

    this.var_eight=new Promise((respond,reject)=>{
      respond("welcome to promises");
    })
  }
}
