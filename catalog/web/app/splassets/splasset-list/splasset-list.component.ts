import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';

import { ComponentsHelper } from 'ng2-bootstrap/ng2-bootstrap';
import { Observable } from "RxJS/Rx";

import { Feature } from '../../splassets/feature';
import { FeatureService } from '../../splassets/feature.service';

@Component({
    moduleId: module.id,
    selector: 'splasset-list',
    templateUrl: 'splasset-list.component.html',
    styleUrls: ['splasset-list.component.css'],  
})
export class SplAssetListComponent implements OnInit {  
    featuresx: Feature[] = [];    

    constructor( private viewContainerRef: ViewContainerRef,
                 private ftrSvc : FeatureService,
                 private router : Router,    
                 private componentsHelper: ComponentsHelper ) {

                        componentsHelper.setRootViewContainerRef(viewContainerRef); //ModalComponent do Bootstrap só funciona com isso!!
                }


    ngOnInit(): void {  //Idem ao init-form
        this.ftrSvc.getFeatures().subscribe(res => { this.featuresx = res });
    }




}


