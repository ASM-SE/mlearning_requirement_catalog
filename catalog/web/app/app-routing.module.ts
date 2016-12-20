import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RequirementsListComponent } from './requirements/requirements-list/requirement-list.component';

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
  /*  {
        path: 'requirement/:id',
        component: RequirementFormComponent
    }   */ 
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}

