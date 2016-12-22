import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from '../app-routing.module';

//import { SharedSettingsService } from '../shared/services/shared-settings.service'; //Constants to access the end points from server(s)
import { RequirementService } from './requirements.service';    //Sevico - antigo controller (angularJS)
import { RequirementsListComponent } from './requirement-list/requirement-list.component';
import { ProgProblemsService } from '../progproblems/progproblems.service';
import { TheoryService } from '../theories/theory.service';

//Angular Material 2
import { MaterialModule } from '@angular/material';

//User Modules
import { SharedModule } from '../shared/shared.module';             //BootstrapNG

//importar o list
import '../shared/extensions/rxjs-extensions';

@NgModule({
  imports:      [ 
      BrowserModule,
      SharedModule,
      MaterialModule.forRoot(),
      FormsModule,
      HttpModule,
      AppRoutingModule
      ],
  declarations: [ 
     RequirementsListComponent
      ],
  providers:    [
    //  SharedSettingsService,
      RequirementService,
      TheoryService,
      ProgProblemsService
      ]     
})
export class RequirementsModule { }
