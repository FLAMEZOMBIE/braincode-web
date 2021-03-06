import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../core/core.module';

@Component({
  selector: 'anms-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CareersComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  // releaseButler = require('../../../../assets/release-butler.png').default;

  constructor(private router: Router) {}

  ngOnInit() {}

  subMenu(url: string) {
    if (url == 'android-programmer') {
      this.router.navigate(['/braincode-web/careers/android-programmer']);
    } else if (url == 'graphic-designer') {
      this.router.navigate(['/braincode-web/careers/graphic-designer']);
    } else {
      this.router.navigate(['/braincode-web/careers/uiux-designer']);
    }
  }
}
