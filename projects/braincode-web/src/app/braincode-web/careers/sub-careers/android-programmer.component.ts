import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';

@Component({
  selector: 'anms-android-programmer',
  templateUrl: './android-programmer.component.html',
  styleUrls: ['./android-programmer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AndroidProgrammerComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  // releaseButler = require('../../../../assets/release-butler.png').default;

  constructor() {}

  ngOnInit() {}
}
