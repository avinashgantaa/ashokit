import {Component} from '@angular/core';
import empService from '../empservices/emp.service'
@Component({
    selector:"second",
    templateUrl:"./sal.component.html"
})
export default class salComponent{
    public empsal:any;
    constructor(private service:empService){}
    ngOnInit(){
        this.empsal=this.service.employsal()
    }
}