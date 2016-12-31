import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RequirementsListComponent } from './splrequirements/requirement-list/requirement-list.component';
import { SplAssetListComponent } from './splassets/splasset-list/splasset-list.component';

import { LolListComponent } from './teste/teste-list/lol-list.component';

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
        path: 'lol',
        component: LolListComponent
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

