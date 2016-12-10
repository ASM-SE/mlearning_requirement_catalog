import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';


import {Observable} from "RxJS/Rx";

import { SharedSettingsService } from '../services/shared-settings.service';
import { Requirement } from './requirement';

@Injectable()
export class RequirementService {
    
    constructor(private http: Http, private api: SharedSettingsService){
    }
    
    getTest() {
        return this.http.get(this.api.requirements)
            .map(res => res.json());
    }

        getHero(id : number): Promise<Hero> {
            return this.getHeroes()
                .then(heroes =>  heroes.find(hero => hero.id === id));
        }    


};



//TODO
//Requiment Controller >> In angular 2 controller is not used anymore. So, verify migration from a controller (AngularJS) to angular 2