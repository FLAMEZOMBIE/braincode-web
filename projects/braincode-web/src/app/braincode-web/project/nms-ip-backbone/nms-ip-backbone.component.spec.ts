import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NmsIpBackboneComponent } from './nms-ip-backbone.component';

describe('NmsIpBackboneComponent', () => {
  let component: NmsIpBackboneComponent;
  let fixture: ComponentFixture<NmsIpBackboneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NmsIpBackboneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NmsIpBackboneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
