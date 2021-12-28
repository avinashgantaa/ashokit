import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tdf',
  templateUrl: './form.component.html',
  styles: [
  ]
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
public formdata(data:any):any{
  console.log(data)
}
}
