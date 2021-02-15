import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MandiriNbsAutomationComponent } from './mandiri-nbs-automation.component';

describe('MandiriNbsAutomationComponent', () => {
  let component: MandiriNbsAutomationComponent;
  let fixture: ComponentFixture<MandiriNbsAutomationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MandiriNbsAutomationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MandiriNbsAutomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
