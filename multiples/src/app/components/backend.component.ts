import {Component} from '@angular/core';
@Component({
    selector:'backend',
    templateUrl:'./backend.component.html'
})
export default class backendComponent{
    public backendfn():string{
        return "REACT JS";
    }
}