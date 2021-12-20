import { Component} from '@angular/core';
@Component({
    selector:'ui',
    templateUrl:'./ui.component.html'
})
export default class uiComponent{
    public uiFn():string{
        return "ANGULAR JS"
    }
}