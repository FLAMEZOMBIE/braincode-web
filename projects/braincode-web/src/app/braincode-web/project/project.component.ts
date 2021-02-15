import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../core/core.module';

@Component({
  selector: 'anms-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectComponent implements OnInit {

  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  // releaseButler = require('../../../../assets/release-butler.png').default;
  
  constructor(private router : Router) {}

  ngOnInit() {}

  subMenu(url : string){
    if(url == "internet-monitoring"){
      this.router.navigate(['/braincode-web/project/internet-monitoring']);
    }
    else if(url == "corporate-account-management"){
      this.router.navigate(['/braincode-web/project/corporate-account-management']);
    }
    else if(url == "geisa"){
      this.router.navigate(['/braincode-web/project/geisa']);
    }
    else if(url == "gag-nikel-e-procurement"){
      this.router.navigate(['/braincode-web/project/gag-nikel-e-procurement']);
    }
    else if(url == "mandiri-sales-kpi-engine"){
      this.router.navigate(['/braincode-web/project/mandiri-sales-kpi-engine']);
    }
    else if(url == "ipran"){
      this.router.navigate(['/braincode-web/project/ipran']);
    }
    else if(url == "big-data"){
      this.router.navigate(['/braincode-web/project/big-data']);
    }
    else if(url == "gag-nikel-e-operation"){
      this.router.navigate(['/braincode-web/project/gag-nikel-e-operation']);
    }
    else if(url == "gag-e-finance"){
      this.router.navigate(['/braincode-web/project/gag-e-finance']);
    }
    else if(url == "nms-ip-backbone"){
      this.router.navigate(['/braincode-web/project/nms-ip-backbone']);
    }
    else if(url == "mandiri-nbs-automation"){
      this.router.navigate(['/braincode-web/project/mandiri-nbs-automation']);
    }
    else{
      this.router.navigate(['/braincode-web/project/nms-availability']);
    }
  }
}
