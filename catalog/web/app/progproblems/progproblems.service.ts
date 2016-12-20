import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';


import {Observable} from "RxJS/Rx";

import { SharedSettingsService } from '../services/shared-settings.service';
import { ProgProblem } from './progproblem';

@Injectable()
export class ProgProblemsService {
    
    constructor(private http: Http, private api: SharedSettingsService){
    }
    
    getProgProblems() {
        return this.http.get(this.api.progproblems)
            .map(res => res.json());
    }


    getProgProblemsbyIds(problems: ProgProblem) {
        return this.http.get(this.api.progproblems + "/ppr/" + problems)
            .map(res => res.json());
    }    



};

