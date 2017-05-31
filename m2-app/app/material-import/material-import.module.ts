import { NgModule } from '@angular/core';
import {
  MdButtonModule,
  MdCardModule,
  MdCheckboxModule,
  MdDialogModule,
  MdInputModule,
  MdMenuModule,
  MdProgressBarModule,
  MdSidenavModule,
  MdSnackBarModule,
  MdToolbarModule
} from '@angular/material';

@NgModule({
  imports: [
    MdInputModule, MdButtonModule, MdCheckboxModule, MdSidenavModule,
    MdProgressBarModule, MdCardModule, MdMenuModule, MdDialogModule,
    MdSnackBarModule, MdToolbarModule
  ],
  exports: [
    MdInputModule, MdButtonModule, MdCheckboxModule, MdSidenavModule,
    MdProgressBarModule, MdCardModule, MdMenuModule, MdDialogModule,
    MdSnackBarModule, MdToolbarModule
  ]
})
export class MaterialImportModule {
}
