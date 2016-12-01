import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [ 
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
  ],
  providers: [ HeroService ], //colocando o service agui ele se torna uma instancia do tipo singleton
  bootstrap: [ AppComponent ]
})
export class AppModule { }

