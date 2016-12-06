import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: ` 

<md-sidenav-layout> <!--Ddeve ser fechado até onde o sidenav deve sobrepor-->
   
        <md-sidenav #left mode="side">
          <nav>
            <a routerLink="/requirement" routerLinkActive="active">Requirement</a>
          </nav>
    </md-sidenav>

    <md-toolbar color="primary">

          <button md-icon-button aria-label="Settings" (click)="left.toggle()">
            <md-icon>menu</md-icon>
          </button>

        Toolbar with Icon Buttons
    <span flex></span>
                
          <button md-icon-button layout="row" layout-align="end start" aria-label="More">
            <md-icon>more_vert</md-icon>
          </button>
<span flex></span>
            <button md-raised-button aria-label="Learn More">
    Learn More
  </button>

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




