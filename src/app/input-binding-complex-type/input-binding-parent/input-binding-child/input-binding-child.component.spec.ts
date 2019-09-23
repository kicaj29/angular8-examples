import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputBindingChildComponent } from './input-binding-child.component';

describe('InputBindingChildComponent', () => {
  let component: InputBindingChildComponent;
  let fixture: ComponentFixture<InputBindingChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputBindingChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputBindingChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
