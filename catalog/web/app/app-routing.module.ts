import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RequirementsListComponent } from './requirements/requirement-list/requirement-list.component';
import { SplAssetListComponent } from './splassets/splasset-list/splasset-list.component';

const routes: Routes = [
    { 
        path: '',
        redirectTo: '/requirement',
        pathMatch: 'full'
    },
    {
        path: 'requirement',
        component: RequirementsListComponent
    },
    {
        path: 'splasset',
        component: SplAssetListComponent
    }    
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}

