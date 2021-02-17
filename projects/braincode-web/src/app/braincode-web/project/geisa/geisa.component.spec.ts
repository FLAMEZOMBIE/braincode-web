import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeisaComponent } from './geisa.component';

describe('GeisaComponent', () => {
  let component: GeisaComponent;
  let fixture: ComponentFixture<GeisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeisaComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
