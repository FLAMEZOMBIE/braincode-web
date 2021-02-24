import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FontAwesomeDemoComponent } from './font-awesome-demo/font-awesome-demo.component';
import { NmsComponent } from './nms/nms.component';
import { GagnikelComponent } from './gagnikel/gagnikel.component';
import { GeisaindexComponent } from './geisaindex/geisaindex.component';

@NgModule({
  imports: [
    // angular
    BrowserAnimationsModule,
    BrowserModule,
    FontAwesomeModule,

    // core
    CoreModule,

    // app
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    FontAwesomeDemoComponent,
    NmsComponent,
    GagnikelComponent,
    GeisaindexComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
