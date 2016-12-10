import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { Requirement } from './requirement';
import { RequirementService } from './requirement.service';

@Component({
    moduleId: module.id,
    selector: 'requirements-list',
    templateUrl: 'requirements-list.component.html',
    styleUrls: ['requirement-list.component.css'],
})
export class RequirementsListComponent implements OnInit {  //Removi implements OnInit

    requirementsx: Requirement[] = [];
    selectedRequirement: Requirement;

         data: any = {default: 'Banana'};
    constructor(private reqSvc : RequirementService, private router : Router) { }

    onSelect(requirement: Requirement): void {
      this.selectedRequirement = requirement;
    }    

  /*  getRequirements() : void {
        this.reqSvc.getRequirements().then(requirements => this.requirements = requirements);
    }*/

 

    ngOnInit(): void {  //Idem ao init-form
        this.reqSvc.getRequirements().subscribe(res => { this.requirementsx = res });
    }

    gotoDetail(requirement: Requirement): void {
     /* this.router.navigate(['/detail', this.selectedRequirement._id]);*/
          this.selectedRequirement = requirement;
      console.log(this.selectedRequirement);
    }  




}




