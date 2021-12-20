import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import empComponent from './components/emp.component';
import salComponent from './components/sal.component'

@NgModule({
  declarations: [
    AppComponent,
    empComponent,
    salComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [empComponent]
})
export class AppModule { }
