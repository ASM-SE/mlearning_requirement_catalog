import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Requirement } from './requirement';
import { RequirementService } from './requirement.service';

@Component({
    moduleId: module.id,
    selector: 'requirements-list',
    templateUrl: 'requirements-list.component.html',
})
export class RequirementsListComponent implements OnInit {  //Removi implements OnInit

    requirementsx: Requirement[] = [];
   // selectedRequirement: Requirement;

    constructor(private reqSvc : RequirementService, private router : Router) {}

  /*  getRequirements() : void {
        this.reqSvc.getRequirements().then(requirements => this.requirements = requirements);
    }*/



    ngOnInit(): void {
        this.reqSvc.getRequirements().then(requirementsx => this.requirementsx = requirementsx);
        console.log(this.requirementsx);
    }



}




