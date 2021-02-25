import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GagnikelComponent } from './gagnikel.component';

describe('GagnikelComponent', () => {
  let component: GagnikelComponent;
  let fixture: ComponentFixture<GagnikelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GagnikelComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GagnikelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
