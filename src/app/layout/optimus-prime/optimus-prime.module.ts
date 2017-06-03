import { CommonModule } from '@angular/common';
import { DialogContentComponent } from './dialog-content/dialog-content.component';
import { NgModule } from '@angular/core';
import { OptimusPrimeComponent } from './optimus-prime.component';
import { OptimusPrimeRoutingModule } from './optimus-prime.routing';
import { OptimusPrimeService } from './optimus-prime.service';
import {
    MdCardModule, MdButtonModule, MdCheckboxModule, MdRadioModule, MdInputModule, MdListModule,
    MdProgressBarModule, MdTabsModule, MdIconModule, MdMenuModule, MdDialogModule, MdSnackBarModule,
} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        MdCardModule, MdButtonModule, MdCheckboxModule, MdRadioModule, MdInputModule, MdListModule,
        MdProgressBarModule, MdTabsModule, MdIconModule, MdMenuModule, MdDialogModule, MdSnackBarModule,
        OptimusPrimeRoutingModule,
    ],
    declarations: [OptimusPrimeComponent, DialogContentComponent],
    providers: [OptimusPrimeService],
    entryComponents: [
        DialogContentComponent,
    ],
})
export class OptimusPrimeModule { }
