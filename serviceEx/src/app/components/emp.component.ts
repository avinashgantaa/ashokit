import { Component } from "@angular/core";
import empService from "../empservices/emp.service"
@Component({
    selector:"uicomponent",
    templateUrl:"./emp.component.html"
})
export default class empComponent{
    public empservice:any;
    constructor(private service:empService){}

    ngOnInit(){
        this.empservice=this.service.employees();
    }

}