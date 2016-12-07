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
      selectedHero: Requirement;
   // selectedRequirement: Requirement;

         data: any = {default: 'Banana'};
    constructor(private reqSvc : RequirementService, private router : Router) {

    }

  /*  getRequirements() : void {
        this.reqSvc.getRequirements().then(requirements => this.requirements = requirements);
    }*/

 

    ngOnInit(): void {
        this.reqSvc.getTest().subscribe(res => { this.requirementsx = res });
    }




  onSelect(hero: Requirement): void {
    this.selectedHero = hero;
  }


}




