import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  var_one:string="ANGULAR";
  var_two:string="react";
  var_three:number=100;
  var_four:Date=new Date();
  var_five:number=100.12345;
  var_six:any[]=[10,20,30,40,50]

  var_seven:any={"key1":"value1","key2":"value2","key3":"value3"};
  var_eight:any=new Promise((respond,reject)=>{
    respond("welcome to pipes concept");
  })

  var_nine:any='hello';

}

  