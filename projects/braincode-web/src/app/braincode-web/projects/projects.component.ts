import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../core/core.module';

@Component({
  selector: 'anms-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  // releaseButler = require('../../../../assets/release-butler.png').default;

  constructor(private router: Router) {}

  ngOnInit() {}

  subMenu(url: string) {
    if (url == 'internet-monitoring') {
      this.router.navigate(['/braincode-web/projects/internet-monitoring']);
    } else if (url == 'corporate-account-management') {
      this.router.navigate([
        '/braincode-web/projects/corporate-account-management'
      ]);
    } else if (url == 'geisa') {
      this.router.navigate(['/braincode-web/projects/geisa']);
    } else if (url == 'gag-nikel-e-procurement') {
      this.router.navigate(['/braincode-web/projects/gag-nikel-e-procurement']);
    } else if (url == 'mandiri-sales-kpi-engine') {
      this.router.navigate([
        '/braincode-web/projects/mandiri-sales-kpi-engine'
      ]);
    } else if (url == 'ipran') {
      this.router.navigate(['/braincode-web/projects/ipran']);
    } else if (url == 'big-data') {
      this.router.navigate(['/braincode-web/projects/big-data']);
    } else if (url == 'gag-nikel-e-operation') {
      this.router.navigate(['/braincode-web/projects/gag-nikel-e-operation']);
    } else if (url == 'gag-e-finance') {
      this.router.navigate(['/braincode-web/projects/gag-e-finance']);
    } else if (url == 'nms-ip-backbone') {
      this.router.navigate(['/braincode-web/projects/nms-ip-backbone']);
    } else if (url == 'mandiri-nbs-automation') {
      this.router.navigate(['/braincode-web/projects/mandiri-nbs-automation']);
    } else {
      this.router.navigate(['/braincode-web/projects/nms-availability']);
    }
  }
}
