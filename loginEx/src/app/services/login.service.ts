import{Injectable} from '@angular/core';
@Injectable({
    providedIn:"root"
})
export default class loginService{
    public loginFn(obj:{"email":string,"password":string}):{"result":string}{
        if(obj.email==="hr@ashokit.in" && obj.password==="ashokit"){
            return {"result":"login pass"}
        }
        else{
            return {"result":"login fail"}
        }

    }
}