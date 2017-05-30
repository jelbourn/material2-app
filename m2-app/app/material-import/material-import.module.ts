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
  MdSnackBarModule
} from '@angular/material';

@NgModule({
  imports: [
    MdInputModule, MdButtonModule, MdCheckboxModule, MdSidenavModule,
    MdProgressBarModule, MdCardModule, MdMenuModule, MdDialogModule,
    MdSnackBarModule
  ],
  exports: [
    MdInputModule, MdButtonModule, MdCheckboxModule, MdSidenavModule,
    MdProgressBarModule, MdCardModule, MdMenuModule, MdDialogModule,
    MdSnackBarModule
  ]
})
export class MaterialImportModule {
}
