import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'anms-uiux-designer',
  templateUrl: './uiux-designer.component.html',
  styleUrls: ['./uiux-designer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiuxDesignerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
