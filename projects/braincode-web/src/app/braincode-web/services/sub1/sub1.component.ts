import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'anms-sub1',
  templateUrl: './sub1.component.html',
  styleUrls: ['./sub1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Sub1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
