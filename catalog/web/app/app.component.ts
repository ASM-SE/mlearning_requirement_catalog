import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: ` 
    <md-toolbar class="md-hue-2">
      <div class="md-toolbar-tools">

        <h2>
          <span>{{title}}</span>
        </h2>
        <span flex=""></span>

      </div>
    </md-toolbar>
  
  
  
  <div layout="row" layout-xs="column">
            <h1>{{title}}</h1>
             <nav>
              <a routerLink="/requirement" routerLinkActive="active">Requirement</a>
            </nav>
            <router-outlet></router-outlet>
            </div>
    `,
})
export class AppComponent  { 
  title = 'M-learning Requirement Catalog'; 
}


