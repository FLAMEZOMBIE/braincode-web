import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateAccountManagementComponent } from "./CorporateAccountManagementComponent";

describe('CorporateAccountManagementComponent', () => {
  let component: CorporateAccountManagementComponent;
  let fixture: ComponentFixture<CorporateAccountManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorporateAccountManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporateAccountManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
