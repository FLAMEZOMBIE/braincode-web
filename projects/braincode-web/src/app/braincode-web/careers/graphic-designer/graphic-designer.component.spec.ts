import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicDesignerComponent } from './graphic-designer.component';

describe('GraphicDesignerComponent', () => {
  let component: GraphicDesignerComponent;
  let fixture: ComponentFixture<GraphicDesignerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GraphicDesignerComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicDesignerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
