import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialImportModule } from '../material-import/material-import.module';

import { HomeComponent } from './home.component';
import { homeRoutes } from './home.routes';
import { HomeDialogContentComponent } from './homedialogue.component';


@NgModule({
  imports: [
    CommonModule, RouterModule, RouterModule.forChild(homeRoutes), MaterialImportModule
  ],
  declarations: [HomeDialogContentComponent, HomeComponent],
  exports: [HomeComponent],
  entryComponents: [HomeDialogContentComponent]
})
export class HomeModule {
}
