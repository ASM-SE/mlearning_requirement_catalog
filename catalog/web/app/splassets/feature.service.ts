import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';


import {Observable} from "RxJS/Rx";

import { SharedSettingsService } from '../services/shared-settings.service';
import { Feature } from './feature';

@Injectable()
export class FeatureService {
    
    constructor(private http: Http, private api: SharedSettingsService){
    }
    
    getFeatures() {
        return this.http.get(this.api.features)
            .map(res => res.json());
    }




};

