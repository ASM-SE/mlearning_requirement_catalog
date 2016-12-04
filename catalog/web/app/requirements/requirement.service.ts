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



