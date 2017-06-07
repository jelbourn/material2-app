import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout.routing';
import { NgModule } from '@angular/core';
import { PinyinService } from './shared/pinyin.service';
import { SHttpService } from './shared/s.http.service';

@NgModule({
    imports: [
        LayoutRoutingModule,
    ],
    declarations: [
        LayoutComponent
    ],
    providers: [PinyinService, SHttpService]
})
export class LayoutModule { }
