import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { APP_CONFIG, IAppConfig } from './config/app.config';

@Injectable()
export class RequirementsService {
    
    constructor(@Inject(APP_CONFIG) private config: IAppConfig){

    }


}