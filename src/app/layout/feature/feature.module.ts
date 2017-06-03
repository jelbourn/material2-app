import { CommonModule } from '@angular/common';
import { DataTableModule } from 'primeng/primeng';
import { FeatureComponent } from './feature.component';
import { FeatureRoutingModule } from './feature.routing';
import { FeatureService } from './feature.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { PinyinService } from '../shared/pinyin.service';

@NgModule({
    imports: [
        CommonModule,
        DataTableModule,
        MaterialModule,
        FeatureRoutingModule,
        FormsModule, ReactiveFormsModule
    ],
    declarations: [FeatureComponent],
    providers: [FeatureService, PinyinService]
})
export class FeatureModule { }
