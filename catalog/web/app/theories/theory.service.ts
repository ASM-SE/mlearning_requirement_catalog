import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';


import {Observable} from "RxJS/Rx";

import { SharedSettingsService } from '../shared/services/shared-settings.service';
import { Theory } from './theory';

@Injectable()
export class TheoryService {
    
    constructor(private http: Http, private api: SharedSettingsService){
    }
    
    getTheories() {
        return this.http.get(this.api.theories)
            .map(res => res.json());
    }


    getTheoriesbyIds(theories) {
        return this.http.get(this.api.theories + "/ets/" + theories)
            .map(res => res.json());
    }    



};

