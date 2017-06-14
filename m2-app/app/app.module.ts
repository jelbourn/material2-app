import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import 'hammerjs';

import { AppComponent, DialogContentComponent } from './app.component';
import { MaterialImportModule } from './material-import/material-import.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    DialogContentComponent, AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialImportModule
  ],
  entryComponents: [DialogContentComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
