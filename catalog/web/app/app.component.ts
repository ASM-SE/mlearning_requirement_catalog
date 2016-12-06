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
    <button md-icon-button aria-label="Settings" (click)="left.toggle()">
      <md-icon>menu</md-icon>
    </button>

  <span>Toolbar with Icon Buttons</span>
 <span class="app-toolbar-filler"></span>
    <button md-icon-button class="md-24" aria-label="More">
    <md-icon>more_vert</md-icon>
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




