import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: ` 

<md-sidenav-layout>
  <md-sidenav #sidenav mode="side" class="app-sidenav">
     <nav>
              <a routerLink="/requirement" routerLinkActive="active">Requirement</a>
            </nav>
  </md-sidenav>

 <md-toolbar color="primary">
    <button class="app-icon-button" (click)="sidenav.toggle()">
      <i class="material-icons app-toolbar-menu">menu</i>
    </button>

    Angular Material2 Example App

    <span class="app-toolbar-filler"></span>
  
  </md-toolbar>
  </md-sidenav-layout>



            <router-outlet></router-outlet>
          
    `,
  styleUrls: ['/app.component.css'],
})
export class AppComponent  { 
  title = 'M-learning Requirement Catalog'; 
}




