import {Injectable} from '@angular/core';

//Service with constants of the apis from the server
//An alternative is in config/app.config.ts
@Injectable()
export class ConstantService {

    _baseApiPath = 'http://localhost:5500/api';
    _api = {
        requirements: this._baseApiPath + '/requirements',  //requirement api        
    };

constructor() {}

}