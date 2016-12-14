//our shared module
import {NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

// import ng2-bootstrap modal module
import {ModalModule, AccordionModule } from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
  imports: [ BrowserModule, ModalModule, AccordionModule ],
  exports: [ ModalModule,
            AccordionModule ]
})
export class SharedModule {}