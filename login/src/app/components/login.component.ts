import {Component} from '@angular/core';
import loginService from '../services/login.service';
@Component({
    selector:'login',
    templateUrl:'./login.component.html'
})
export default class loginComponent{
    public result:any;
    public obj:any={'email':"",'password':""}
    constructor(private service:loginService){}
    public loginfn(){
        this.result=this.service.loginFn(this.obj)
    }
}