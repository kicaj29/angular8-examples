import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticFlagComponent } from './static-flag.component';

describe('StaticFlagComponent', () => {
  let component: StaticFlagComponent;
  let fixture: ComponentFixture<StaticFlagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticFlagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticFlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
