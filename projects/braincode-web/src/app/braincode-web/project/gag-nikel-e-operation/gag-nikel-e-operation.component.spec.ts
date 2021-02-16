import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GagNikelEOperationComponent } from './gag-nikel-e-operation.component';

describe('GagNikelEOperationComponent', () => {
  let component: GagNikelEOperationComponent;
  let fixture: ComponentFixture<GagNikelEOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GagNikelEOperationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GagNikelEOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
