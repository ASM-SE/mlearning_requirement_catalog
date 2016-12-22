import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';

import { ComponentsHelper } from 'ng2-bootstrap/ng2-bootstrap';
import { Observable } from "RxJS/Rx";

import { Requirement } from '../requirement';
import { RequirementService } from '../requirements.service';

import { Theory } from '../../theories/theory';
import { TheoryService } from '../../theories/theory.service';

import { ProgProblem } from '../../progproblems/progproblem';
import { ProgProblemsService } from '../../progproblems/progproblems.service';



@Component({
    moduleId: module.id,
    selector: 'requirements-list',
    templateUrl: 'requirement-list.component.html',
    styleUrls: ['requirement-list.component.css'],  
})
export class RequirementsListComponent implements OnInit {  
    public oneAtATime:boolean = true;  //Accordion property
    requirementsx: Requirement[] = [];
    theoriesx: Theory[] = [];
    progproblmesx: ProgProblem[] = [];
    selectedRequirement: Requirement;
    result: any;
    title: any; //Modal title
    status: string = ''; //Acordion Bootstrap status
    constructor(private viewContainerRef: ViewContainerRef,
                private reqSvc : RequirementService, 
                private trySvc : TheoryService,
                private ppgSvc : ProgProblemsService,
                private router : Router,
                private componentsHelper: ComponentsHelper
                ) {

                        componentsHelper.setRootViewContainerRef(viewContainerRef); //ModalComponent do Bootstrap só funciona com isso!!
                }

    Select(requirement: Requirement): void {
      this.selectedRequirement = requirement;
    }    



    ngOnInit(): void {  //Idem ao init-form
        this.reqSvc.getRequirements().subscribe(res => { this.requirementsx = res });
    }



    //Modal function with parameters
    clickTheory(et_id: Theory, TheoryModal:any){
        console.log(et_id);
        this.trySvc.getTheoriesbyIds(et_id).subscribe(res => { this.theoriesx = res });
        this.title = "Educational Theory";
        TheoryModal.show()

    }

    //Modal function with parameters
    clickProgProblem(pg_id: ProgProblem, ProgProblemModal:any){
        console.log(pg_id);
        this.ppgSvc.getProgProblemsbyIds(pg_id).subscribe(res => { this.progproblmesx = res });
        this.title = "Programming Problem";
        ProgProblemModal.show()

    }    


}


