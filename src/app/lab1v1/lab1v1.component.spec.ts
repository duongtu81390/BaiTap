import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab1v1Component } from './lab1v1.component';

describe('Lab1v1Component', () => {
  let component: Lab1v1Component;
  let fixture: ComponentFixture<Lab1v1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lab1v1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab1v1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
