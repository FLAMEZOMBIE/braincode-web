import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NmsAvailabilityComponent } from './nms-availability.component';

describe('NmsAvailabilityComponent', () => {
  let component: NmsAvailabilityComponent;
  let fixture: ComponentFixture<NmsAvailabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NmsAvailabilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NmsAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
