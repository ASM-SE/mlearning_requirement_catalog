import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';

import {DialogsService} from '../services/dialogs.service';

import { Requirement } from './requirement';
import { RequirementService } from './requirement.service';

//import { Theory } from '../theories/theories';
//import { TheoryService } from '../theories/theory.service';

import {AccordionModule} from 'ng2-bootstrap/ng2-bootstrap';

@Component({
    moduleId: module.id,
    selector: 'requirements-list',
    templateUrl: 'requirements-list.component.html',
    styleUrls: ['requirement-list.component.css'],  
})
export class RequirementsListComponent implements OnInit {  //Removi implements OnInit
    public oneAtATime:boolean = true;  //Accordion property
    requirementsx: Requirement[] = [];
    selectedRequirement: Requirement;
    result: any;
    data: any = {default: 'Banana'};
    constructor(private reqSvc : RequirementService, 
                private router : Router,
                private dialogsService: DialogsService, 
                private viewContainerRef: ViewContainerRef) {}

    onSelect(requirement: Requirement): void {
      this.selectedRequirement = requirement;
    }    


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




/*

  <button (click)="gotoDetail(requirement)">View Details</button>
  <p>Selected Value: <span class="radioValue">{{data.default}}</span></p>
  <md-radio-group  [(ngModel)]="data.default" [ngModelOptions]="{standalone: false}">
              <md-radio-button value="1" class="md-primary" >1</md-radio-button>
              <md-radio-button value="2" class="md-primary">2</md-radio-button>
              <md-radio-button value="3" class="md-primary">3</md-radio-button>
              <md-radio-button value="4" class="md-primary">4</md-radio-button>
              <md-radio-button value="5" class="md-primary">5</md-radio-button>
            
            </md-radio-group>
       <p> <md-input placeholder="Observações" style="width: 100%"></md-input> </p>

        </div>

<div>
  <button md-raised-button (click)="openDialog(requirement)">Open Dialog</button>
  <p>Result from dialog: {{ result }}</p>
</div>
*/