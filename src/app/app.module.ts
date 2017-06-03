import { AppComponent, DialogContentComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  declarations: [AppComponent, DialogContentComponent],
  entryComponents: [DialogContentComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }

