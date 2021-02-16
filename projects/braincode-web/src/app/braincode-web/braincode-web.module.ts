import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BraincodeWebRoutingModule } from './braincode-web-routing.module';
import { BraincodeWebComponent } from './braincode-web.component';
import { MatButtonModule } from '@angular/material/button';
import { ServicesComponent } from './services/services.component';
import { Sub1Component } from './services/sub1/sub1.component';
import { Sub2Component } from './services/sub2/sub2.component';
import { Sub3Component } from './services/sub3/sub3.component';
import { Sub4Component } from './services/sub4/sub4.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from '../app/app.component';
import { AboutComponent } from './about/about.component';
import { CareersComponent } from './careers/careers.component';


@NgModule({
  declarations: [BraincodeWebComponent, ServicesComponent, Sub1Component, Sub2Component, Sub3Component, Sub4Component,AboutComponent,CareersComponent ],
  imports: [CommonModule, BraincodeWebRoutingModule,MatButtonModule,NgbModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class BraincodeWebModule {}
