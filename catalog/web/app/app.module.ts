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
import { MaterialModule } from '@angular/material';

//User Modules
import { DialogsModule } from './modules/dialogs.module';//Testing Dialog with Angular 1 Material

import {MenubarModule, ToolbarModule} from 'primeng/primeng';

//importar o list
import './rxjs-extensions';

@NgModule({
  imports:      [ 
      BrowserModule,
      MaterialModule.forRoot(),
      FormsModule,
      HttpModule,
      AppRoutingModule,
      DialogsModule,
      ToolbarModule,
      MenubarModule
      ],
  declarations: [ 
      AppComponent,
      RequirementsListComponent
      ],
  providers:    [
      SharedSettingsService,
      RequirementService
      ],
  bootstrap:    [ 
      AppComponent 
      ]
})
export class AppModule { }
