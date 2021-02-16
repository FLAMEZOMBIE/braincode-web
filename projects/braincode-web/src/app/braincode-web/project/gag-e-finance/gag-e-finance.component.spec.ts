import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GagEFinanceComponent } from './gag-e-finance.component';

describe('GagEFinanceComponent', () => {
  let component: GagEFinanceComponent;
  let fixture: ComponentFixture<GagEFinanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GagEFinanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GagEFinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
