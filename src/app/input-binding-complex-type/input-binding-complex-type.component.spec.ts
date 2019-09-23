import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputBindingComplexTypeComponent } from './input-binding-complex-type.component';

describe('InputBindingComplexTypeComponent', () => {
  let component: InputBindingComplexTypeComponent;
  let fixture: ComponentFixture<InputBindingComplexTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputBindingComplexTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputBindingComplexTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
