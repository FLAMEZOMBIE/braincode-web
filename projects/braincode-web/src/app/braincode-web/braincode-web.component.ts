import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
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

  constructor() {}

  ngOnInit() {}
}
