import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import uiComponent  from './components/ui.component';

import backendComponent from './components/backend.component';

import dbComponent from './components/DB.component';

@NgModule({
  declarations: [
    AppComponent,
    uiComponent,
    backendComponent,

    dbComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [uiComponent]
})
export class AppModule { }
