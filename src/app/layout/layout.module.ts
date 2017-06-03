import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout.routing';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        LayoutRoutingModule,
    ],
    declarations: [
        LayoutComponent
    ]
})
export class LayoutModule { }
