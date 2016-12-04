import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

//User imports
import { AppComponent }  from './app.component';
import { SharedSettingsService } from './services/shared-settings.service'; //Constants to access the end points from server(s)


@NgModule({
  imports:      [ 
      BrowserModule, 
      HttpModule 
      ],
  declarations: [ 
      AppComponent 
      ],
  providers:    [
      SharedSettingsService,
      ],
  bootstrap:    [ 
      AppComponent 
      ]
})
export class AppModule { }
