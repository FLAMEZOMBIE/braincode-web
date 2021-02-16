import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternetMonitoringComponent } from './internet-monitoring.component';

describe('InternetMonitoringComponent', () => {
  let component: InternetMonitoringComponent;
  let fixture: ComponentFixture<InternetMonitoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternetMonitoringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternetMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
