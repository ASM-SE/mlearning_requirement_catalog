import { OpaqueToken } from "@angular/core";


//Create endpoint interface for access by other services in the app
//Alternative for /services/constant-service.service.ts
//Source: http://stackoverflow.com/questions/34986922/define-global-constants-in-angular-2

//TODO Maybe this can be split in several files each for its respective end point

export let APP_CONFIG = new OpaqueToken("app.config");

export interface IAppConfig {
    apiEndPoint: string;
    requirementsPath: string;
}

export const AppConfig: IAppConfig = {    
    apiEndPoint: "http://localhost:5500/api",            //Endpoint server address
    requirementsPath: this.apiEndPoint + '/requirements' //requirement api 
    
};


