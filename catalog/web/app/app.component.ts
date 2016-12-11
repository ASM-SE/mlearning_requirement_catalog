import { Component, ViewContainerRef, OnInit } from '@angular/core';
import {MenubarModule,MenuItem} from 'primeng/primeng';



@Component({
  selector: 'my-app',
  template: ` 

<p-menubar [model]="items"></p-menubar>

  <div class="app-content">
                    <router-outlet></router-outlet>
        </div>
    


    `,
  styleUrls: ['/app.component.css']

})
export class AppComponent  implements OnInit { 
  title = 'M-learning Requirement Catalog'; 

 private items: MenuItem[];

    ngOnInit() {
        this.items = [
            {
                label: 'File',
                items: [{
                        label: 'New', 
                        icon: 'fa-plus',
                        items: [
                            {label: 'Project'},
                            {label: 'Other'},
                        ]
                    },
                    {label: 'Open'},
                    {label: 'Quit'}
                ]
            },
            {
                label: 'Edit',
                icon: 'fa-edit',
                items: [
                    {label: 'Undo', icon: 'fa-mail-forward'},
                    {label: 'Redo', icon: 'fa-mail-reply'}
                ]
            }
        ];
    }

}


/*   */