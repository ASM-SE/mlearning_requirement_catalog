import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: ` 

<md-sidenav-layout> <!--Ddeve ser fechado até onde o sidenav deve sobrepor-->
   
    <md-sidenav #left mode="side" layout-padding>
          <nav>
            <a routerLink="/requirement" routerLinkActive="active">Requirement</a>
          </nav>
    </md-sidenav>

    <md-toolbar color="primary">

          <button md-icon-button class="app-icon-button" (click)="left.toggle()">
            <md-icon>menu</md-icon>
          </button>

        Toolbar with Icon Buttons
    
    </md-toolbar>




    <div class="app-content">
                <router-outlet></router-outlet>
    </div>
 
 </md-sidenav-layout>

          
    `,
  styleUrls: ['/app.component.css'],
})
export class AppComponent  { 
  title = 'M-learning Requirement Catalog'; 
}




