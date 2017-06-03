import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import 'hammerjs';
import { MdSidenavModule, MdToolbarModule, MdButtonModule, MdIconModule } from '@angular/material';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        AppRoutingModule,
        BrowserAnimationsModule,
        BrowserModule,
        CommonModule,
        HttpModule,
        MdSidenavModule, MdToolbarModule, MdButtonModule, MdIconModule,
        RouterModule,
    ],
    bootstrap: [
        AppComponent,
    ]
})
export class AppModule { }
