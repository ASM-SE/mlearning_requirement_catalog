import {Injectable} from '@angular/core';

//Service with constants of the apis from the server
//Source: http://stackoverflow.com/questions/35215112/pass-page-global-variables-into-angular2-app-for-use-with-services
@Injectable()
export class SharedSettingsService {

    baseApiPath: string = "http://localhost:5500/api";
    requirements: string = this.baseApiPath + "/requirements";     //requirement api        

}