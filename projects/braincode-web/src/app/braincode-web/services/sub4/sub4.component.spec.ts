import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sub4Component } from './sub4.component';

describe('Sub4Component', () => {
  let component: Sub4Component;
  let fixture: ComponentFixture<Sub4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sub4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sub4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
