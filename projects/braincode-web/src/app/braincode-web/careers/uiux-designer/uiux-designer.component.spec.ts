import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiuxDesignerComponent } from './uiux-designer.component';

describe('UiuxDesignerComponent', () => {
  let component: UiuxDesignerComponent;
  let fixture: ComponentFixture<UiuxDesignerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiuxDesignerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiuxDesignerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
