import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
//import 'rxjs/Rx';


import { Observable } from "RxJS/Rx";

import { SharedSettingsService } from '../services/shared-settings.service';
//import { Requirement } from './requirement';

@Injectable()
export class LolService {
    
    constructor(private http: Http, private api: SharedSettingsService){
    }
    
    getChampions() {
        return this.http.get('http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json')
            .map(res => res.json());
    }


/*    getRequirement(requirement) {
        return this.http.get(this.api.requirements + "/" + requirement)
            .map(res => res.json());
    }  */  


};



//TODO
//Requiment Controller >> In angular 2 controller is not used anymore. So, verify migration from a controller (AngularJS) to angular 2