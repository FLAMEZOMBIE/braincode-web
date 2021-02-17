import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MandiriSalesKpiEngineComponent } from './mandiri-sales-kpi-engine.component';

describe('MandiriSalesKpiEngineComponent', () => {
  let component: MandiriSalesKpiEngineComponent;
  let fixture: ComponentFixture<MandiriSalesKpiEngineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MandiriSalesKpiEngineComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MandiriSalesKpiEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
