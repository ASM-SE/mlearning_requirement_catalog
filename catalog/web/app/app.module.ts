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

//Angular Material
import {MdCardModule} from '@angular2-material/card';
import {MdButtonModule} from '@angular2-material/button';
import {MdIconModule} from '@angular2-material/icon';
import {MdIconRegistry} from '@angular2-material/icon';

import './rxjs-extensions';

@NgModule({
  imports:      [ 
      BrowserModule, 
      HttpModule,
      AppRoutingModule,
      MdCardModule,
      MdButtonModule,
      MdIconModule
      ],
  declarations: [ 
      AppComponent,
      RequirementsListComponent
      ],
  providers:    [
      SharedSettingsService,
      RequirementService,
      MdIconRegistry
      ],
  bootstrap:    [ 
      AppComponent 
      ]
})
export class AppModule { }
