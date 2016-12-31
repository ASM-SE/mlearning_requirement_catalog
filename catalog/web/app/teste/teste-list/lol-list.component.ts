import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';

import { ComponentsHelper } from 'ng2-bootstrap/ng2-bootstrap';
import { Observable } from "RxJS/Rx";

//import { Requirement } from '../requirement';
import { LolService } from '../lol.service';




@Component({
    moduleId: module.id,
    selector: 'requirements-list',
    templateUrl: 'lol-list.component.html',
    styleUrls: ['requirement-list.component.css'],  
})
export class LolListComponent implements OnInit {  
    public oneAtATime:boolean = true;  //Accordion property
  /*  requirementsx: Requirement[] = [];
    theoriesx: Theory[] = [];
    progproblmesx: ProgProblem[] = [];
    selectedRequirement: Requirement;*/
    result: any[];
            adress: any = 'http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json';
    title: any; //Modal title
    status: string = ''; //Acordion Bootstrap status
    constructor(private viewContainerRef: ViewContainerRef,
                private lolSvc : LolService, 
                private router : Router,
                private componentsHelper: ComponentsHelper
                ) {

                        componentsHelper.setRootViewContainerRef(viewContainerRef); //ModalComponent do Bootstrap só funciona com isso!!
                }

  /*  Select(requirement: Requirement): void {
      this.selectedRequirement = requirement;
    }    
*/


    ngOnInit(): void {  //Idem ao init-form
        //this.lolSvc.getChampions().subscribe(res => { this.result = res });
       // console.log(JSON.stringify(this.result));

        var jsonData = JSON.parse(this.adress);
        console.log(jsonData);
    }





}


