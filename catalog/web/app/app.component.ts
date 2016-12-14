import { Component,OnInit } from '@angular/core';



@Component({
  selector: 'my-app',
  template: ` 
<md-sidenav-layout  fullscreen> <!--Ddeve ser fechado até onde o sidenav deve sobrepor-->
      
        <md-sidenav #left mode="over" layout-padding>

        <md-toolbar color="primary">

              
            <h2>Menu</h2>
        
        </md-toolbar>        

<md-nav-list> 
<a md-list-item md-ink-ripple="#333333" routerLink="/requirement" routerLinkActive="active" (click)="left.toggle()">
 <md-icon md-list-icon>palette</md-icon>
  <span md-line>Requirement</span> </a> 
    </md-nav-list>           

         <a routerLink="/requirement" routerLinkActive="active">Requirement</a>

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
  styleUrls: ['/app.component.css']

})
export class AppComponent  { 
  title = 'M-learning Requirement Catalog'; 

}


/*   */