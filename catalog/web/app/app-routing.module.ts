import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RequirementsListComponent } from './requirements/requirement-list.component';

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
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}

