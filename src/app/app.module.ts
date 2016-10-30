import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from '@angular/material';
import {Material2AppAppComponent} from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule.forRoot(),
  ],
  declarations: [Material2AppAppComponent],
  bootstrap: [Material2AppAppComponent],
})
export class MaterialAppModule { }
