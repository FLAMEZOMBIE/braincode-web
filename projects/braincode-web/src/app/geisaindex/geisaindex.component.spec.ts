import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeisaindexComponent } from './geisaindex.component';

describe('GeisaindexComponent', () => {
  let component: GeisaindexComponent;
  let fixture: ComponentFixture<GeisaindexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeisaindexComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeisaindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
