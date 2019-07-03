import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallDogComponent } from './small-dog.component';

describe('SmallDogComponent', () => {
  let component: SmallDogComponent;
  let fixture: ComponentFixture<SmallDogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallDogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallDogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
