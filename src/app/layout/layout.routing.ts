import { LayoutComponent } from './layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'optimus-prime', loadChildren: './optimus-prime/optimus-prime.module#OptimusPrimeModule' },
            { path: 'feature', loadChildren: './feature/feature.module#FeatureModule' }
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
