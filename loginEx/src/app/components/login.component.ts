import { Component } from "@angular/core";
import loginService from "../services/login.service"

@Component({
    selector:'login',
    templateUrl:'./login.component.html'
})
export default class loginComponent{
    public login:any;
    public obj:any={"email":"","password":""}
    constructor(private service:loginService){}
    public loginfunction(){
        this.login=this.service.loginFn(this.obj);

    }
}