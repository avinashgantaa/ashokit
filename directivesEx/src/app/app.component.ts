import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directivesEx';

  public uname:string="";
  public pwd:string="";
  login():any{
    if(this.uname=="ashok"&&this.pwd=="ashok"){
      alert("login success");
    }
    else{
      alert("login fail");
    }

  }
  /*public products:any[]=[
    {"p_id":111,"p_name":"shirt1","p_cost":"1000","p_img":"polo.jpg"},
    {"p_id":222,"p_name":"shirt2","p_cost":"2000","p_img":"polo.jpg"},
    {"p_id":333,"p_name":"shirt3","p_cost":"3000","p_img":"polo.jpg"},
    {"p_id":444,"p_name":"shirt4","p_cost":"4000","p_img":"polo.jpg"},
    {"p_id":555,"p_name":"shirt5","p_cost":"5000","p_img":"polo.jpg"},
    {"p_id":666,"p_name":"shirt6","p_cost":"6000","p_img":"polo.jpg"}
  ]
  */
  
}
