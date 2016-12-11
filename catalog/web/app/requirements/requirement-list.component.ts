import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';

import {DialogsService} from '../services/dialogs.service';

import { Requirement } from './requirement';
import { RequirementService } from './requirement.service';

import {AccordionModule} from 'ng2-bootstrap/ng2-bootstrap';

@Component({
    moduleId: module.id,
    selector: 'requirements-list',
    templateUrl: 'requirements-list.component.html',
    styleUrls: ['requirement-list.component.css'],  
})
export class RequirementsListComponent implements OnInit {  //Removi implements OnInit

    requirementsx: Requirement[] = [];
    selectedRequirement: Requirement;
    result: any;

         data: any = {default: 'Banana'};
    constructor(private reqSvc : RequirementService, 
                private router : Router,
                private dialogsService: DialogsService, 
                private viewContainerRef: ViewContainerRef) { }

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

  status: string = '';
  customClose(interesting: boolean) {
    if (interesting) {
      this.status = 'That article was interesting.';
    } else {
      this.status = 'Look for something else.';
    }
  }

/*
  openDialog(requirement) {
    this.dialogsService
      .confirm('Confirm Dialog', requirement.rq_requirement, this.viewContainerRef)
      .subscribe(res => this.result = res);
  }
*/


}




