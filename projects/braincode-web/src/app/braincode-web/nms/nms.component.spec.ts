import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NmsComponent } from './nms.component';

describe('NmsComponent', () => {
  let component: NmsComponent;
  let fixture: ComponentFixture<NmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NmsComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
