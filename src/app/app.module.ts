import { AppComponent, DialogContentComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';
import 'hammerjs';

@NgModule({
    declarations: [
        AppComponent,
        DialogContentComponent,
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        CommonModule,
        FormsModule,
        HttpModule,
        MaterialModule,
    ],
    entryComponents: [
        DialogContentComponent,
    ],
    bootstrap: [
        AppComponent,
    ]
})
export class AppModule { }
