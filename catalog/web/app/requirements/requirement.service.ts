import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';


import { SharedSettingsService } from '../services/shared-settings.service';

@Injectable()
export class RequirementService {
    
    constructor(private http: Http, private api: SharedSettingsService){}
    
    getRequirements = () =>{
         return this.http.get(this.api.requirements);
    };

};



//TODO
//Requiment Controller >> In angular 2 controller is not used anymore. So, verify migration from a controller (AngularJS) to angular 2