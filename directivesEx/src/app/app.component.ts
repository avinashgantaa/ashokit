import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directivesEx';

  products:any[]=[
    {'p_id':111,'p_name':'pone','p_cost':1000},
    {'p_id':222,'p_name':'ptwo','p_cost':2000},
    {'p_id':333,'p_name':'pthree','p_cost':3000},
    {'p_id':444,'p_name':'pfour','p_cost':4000},
    {'p_id':555,'p_name':'pfive','p_cost':5000},
    {'p_id':666,'p_name':'psix','p_cost':6000}
  ]
  
  
}
