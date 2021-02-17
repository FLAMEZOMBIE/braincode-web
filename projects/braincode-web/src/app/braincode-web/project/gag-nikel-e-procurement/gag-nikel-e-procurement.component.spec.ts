import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GagNikelEProcurementComponent } from './gag-nikel-e-procurement.component';

describe('GagNikelEProcurementComponent', () => {
  let component: GagNikelEProcurementComponent;
  let fixture: ComponentFixture<GagNikelEProcurementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GagNikelEProcurementComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GagNikelEProcurementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
