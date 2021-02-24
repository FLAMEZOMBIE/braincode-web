import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BraincodeWebRoutingModule } from './braincode-web-routing.module';
import { BraincodeWebComponent } from './braincode-web.component';
import { MatButtonModule } from '@angular/material/button';
import { ServicesComponent } from './services/services.component';
import { Sub1Component } from './services/sub1/sub1.component';
import { Sub2Component } from './services/sub2/sub2.component';
import { Sub3Component } from './services/sub3/sub3.component';
import { Sub4Component } from './services/sub4/sub4.component';
import { AppComponent } from '../app/app.component';
import { AboutComponent } from './about/about.component';
import { CareersComponent } from './careers/careers.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactComponent } from './contact/contact.component';
import { More1Component } from './news/more1/more1.component';
import { More2Component } from './news/more2/more2.component';
import { More3Component } from './news/more3/more3.component';
import { More4Component } from './news/more4/more4.component';
import { More5Component } from './news/more5/more5.component';

@NgModule({
  declarations: [
    BraincodeWebComponent,
    ServicesComponent,
    Sub1Component,
    Sub2Component,
    Sub3Component,
    Sub4Component,
    AboutComponent,
    CareersComponent,
    ContactComponent,
    More1Component,
    More2Component,
    More3Component,
    More4Component,
    More5Component
  ],
  imports: [
    CommonModule,
    BraincodeWebRoutingModule,
    MatButtonModule,
    NgbModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class BraincodeWebModule {}
