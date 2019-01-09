import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {ComboModule} from 'krembo';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ComboModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
