import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

//User imports
import { AppComponent }  from './app.component';
import { SharedSettingsService } from './services/shared-settings.service'; //Constants to access the end points from server(s)
import { RequirementService } from './requirements/requirement.service';    //Sevico - antigo controller (angularJS)
import { RequirementsListComponent } from './requirements/requirement-list.component';

import { TheoryService } from './theories/theory.service';

//Angular Material 2
import { MaterialModule } from '@angular/material';

//User Modules
import { SharedModule } from './modules/shared.module';             //BootstrapNG

//importar o list
import './rxjs-extensions';

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
      AppComponent,
      RequirementsListComponent
      ],
  providers:    [
      SharedSettingsService,
      RequirementService,
      TheoryService
      ],
  bootstrap:    [ 
      AppComponent 
      ]
})
export class AppModule { }
