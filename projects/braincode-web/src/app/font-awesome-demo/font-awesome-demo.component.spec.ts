import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontAwesomeDemoComponent } from './font-awesome-demo.component';

describe('FontAwesomeDemoComponent', () => {
  let component: FontAwesomeDemoComponent;
  let fixture: ComponentFixture<FontAwesomeDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FontAwesomeDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FontAwesomeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
