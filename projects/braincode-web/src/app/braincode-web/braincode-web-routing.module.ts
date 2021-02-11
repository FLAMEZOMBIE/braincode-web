import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BraincodeWebComponent } from './braincode-web.component';
import { CareersComponent } from './careers/careers.component';
import { AndroidProgrammerComponent } from './careers/sub-careers/android-programmer.component';
import { ClientsComponent } from './clients/clients.component';
import { NewsComponent } from './news/news.component';
import { ServicesComponent } from './services/services.component';
import { Sub1Component } from './services/sub1/sub1.component';
import { Sub2Component } from './services/sub2/sub2.component';
import { Sub3Component } from './services/sub3/sub3.component';
import { Sub4Component } from './services/sub4/sub4.component';
import { More1Component } from './news/more1/more1.component';
import { More2Component } from './news/more2/more2.component';
import { More3Component } from './news/more3/more3.component';
import { More4Component } from './news/more4/more4.component';
import { More5Component } from './news/more5/more5.component';

const routes: Routes = [
  {
    path: '',
    component: BraincodeWebComponent
  },
  {
    path: 'about',
    children: [
      { path: '', component: AboutComponent }
      // { path: '', component:  },
    ]
  },
  {
    path: 'services',
    children: [
      { path: '', component: ServicesComponent },
      { path: 'sub1', component: Sub1Component },
      { path: 'sub2', component: Sub2Component },
      { path: 'sub3', component: Sub3Component },
      { path: 'sub4', component: Sub4Component }
    ]
  },
  {
    path: 'careers',
    children: [
      { path: '', component: CareersComponent },
      { path: 'android-programmer', component: AndroidProgrammerComponent }
    ]
  },

  {
    path: 'clients',
    children: [
      { path: '', component: ClientsComponent }
      // { path: '', component:  },
    ]
  },
  {
    path: 'news',
    children: [
      { path: '', component: NewsComponent },
      { path: 'more1', component: More1Component },
      { path: 'more2', component: More2Component },
      { path: 'more3', component: More3Component },
      { path: 'more4', component: More4Component },
      { path: 'more5', component: More5Component }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BraincodeWebRoutingModule {}
