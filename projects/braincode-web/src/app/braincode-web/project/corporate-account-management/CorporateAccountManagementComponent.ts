import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'anms-corporate-account-management',
  templateUrl: './corporate-account-management.component.html',
  styleUrls: ['./corporate-account-management.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CorporateAccountManagementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
