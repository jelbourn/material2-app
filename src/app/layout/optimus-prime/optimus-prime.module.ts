import { CommonModule } from '@angular/common';
import { DialogContentComponent } from './dialog-content/dialog-content.component';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { OptimusPrimeComponent } from './optimus-prime.component';
import { OptimusPrimeRoutingModule } from './optimus-prime.routing';
import { OptimusPrimeService } from './optimus-prime.service';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        OptimusPrimeRoutingModule,
    ],
    declarations: [OptimusPrimeComponent, DialogContentComponent],
    providers: [OptimusPrimeService],
    entryComponents: [
        DialogContentComponent,
    ],
})
export class OptimusPrimeModule { }
