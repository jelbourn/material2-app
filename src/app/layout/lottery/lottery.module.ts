import { CommonModule } from '@angular/common';
import { DataTableModule } from 'primeng/primeng';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LotteryComponent } from './lottery.component';
import { LotteryRoutingModule } from './lottery.routing';
import { LotteryService } from './lottery.service';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        CommonModule,
        DataTableModule,
        FormsModule, ReactiveFormsModule,
        LotteryRoutingModule,
        MaterialModule
    ],
    declarations: [LotteryComponent],
    providers: [LotteryService]
})
export class LotteryModule { }
