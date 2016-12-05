import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { SharedSettingsService } from '../services/shared-settings.service';
import { Requirement } from './requirement';

@Injectable()
export class RequirementService {
    
    constructor(private http: Http, private api: SharedSettingsService){

        
console.log('O que tem aqui' + api.requirements);
    }
    
  /*  getRequirements = () =>{
         return this.http.get(this.api.requirements);
    };

    getReq = () => {
        this.getRequirements()
            .then((res) => {
                this.requirement = res.data;
            })
    }
*/


        getRequirements() : Promise<Requirement[]> {
            return this.http.get(this.api.requirements)
                .toPromise()
                .then(response => response.json().data as Requirement[])
                .catch(this.handleError);
        }
    
        private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
        }  

};



//TODO
//Requiment Controller >> In angular 2 controller is not used anymore. So, verify migration from a controller (AngularJS) to angular 2