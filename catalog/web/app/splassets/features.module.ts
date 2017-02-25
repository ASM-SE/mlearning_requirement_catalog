import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from '../app-routing.module';

//import { SharedSettingsService } from '../shared/services/shared-settings.service'; //Constants to access the end points from server(s)
import { FeatureService } from './feature.service';    //Sevico - antigo controller (angularJS)
import { SplAssetListComponent } from './splasset-list/splasset-list.component';

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
     SplAssetListComponent
      ],
  providers:    [
    //  SharedSettingsService,
      FeatureService
      ]     
})
export class FeaturesModule { }
