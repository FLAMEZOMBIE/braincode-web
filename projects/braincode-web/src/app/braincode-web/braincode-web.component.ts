import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../core/core.module';

@Component({
  selector: 'anms-braincode-web',
  templateUrl: './braincode-web.component.html',
  styleUrls: ['./braincode-web.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BraincodeWebComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  // releaseButler = require('../../../../assets/release-butler.png').default;

  constructor( private router: Router) {}

  ngOnInit(): void {
  }

  submenu(url:string){
    if(url == "sub1"){
      this.router.navigate(['/braincode-web/about']);
    }
    else if( url == "sub2"){
      this.router.navigate(['/braincode-web/services/sub2']);
    }
   else if (url == "sub3"){
    this.router.navigate(['/braincode-web/services']);
   }
   else if (url == "sub4"){
    this.router.navigate(['/braincode-web/careers']);
   }
  else {
    this.router.navigate(['/braincode-web/services/sub4']);
    }
    
  }
}
