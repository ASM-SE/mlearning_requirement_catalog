import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

//User imports
import { AppComponent }  from './app.component';
import { SharedSettingsService } from './services/shared-settings.service'; //Constants to access the end points from server(s)
//import { ProgProblemService } from './progproblems/progproblem.service';
import { SplAssetListComponent } from './splassets/splasset-list/splasset-list.component';

//Angular Material 2
import { MaterialModule } from '@angular/material';

//User Modules
import { SharedModule } from './shared/shared.module';             //BootstrapNG
import { RequirementsModule } from './splrequirements/requirements.module';


//Teste LOL
import { LolService } from './teste/lol.service';
import { LolListComponent } from './teste/teste-list/lol-list.component';

//importar o list
import './shared/extensions/rxjs-extensions';

@NgModule({
  imports:      [ 
      BrowserModule,
      SharedModule,
      MaterialModule.forRoot(),
      FormsModule,
      HttpModule,
      AppRoutingModule,
      RequirementsModule
      ],
  declarations: [ 
      AppComponent,
      SplAssetListComponent,
            LolListComponent
      ],
  providers:    [
      SharedSettingsService,
      LolService
     // TheoryService,
    //  ProgProblemService
      ],
  bootstrap:    [ 
      AppComponent 
      ]
})
export class AppModule { }
