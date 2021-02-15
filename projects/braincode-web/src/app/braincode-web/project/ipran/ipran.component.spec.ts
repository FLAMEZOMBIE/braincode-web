import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpranComponent } from "./ipran.component";

describe('IpranComponent', () => {
  let component: IpranComponent;
  let fixture: ComponentFixture<IpranComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpranComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IpranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
