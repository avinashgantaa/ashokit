import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styles: [
  ]
})
export class ChildComponent implements OnInit {
  @Input() p_id:any;
  @Input() p_name:any;
  @Input() p_cost:any;

  constructor() { }

  ngOnInit(): void {
  }

}
