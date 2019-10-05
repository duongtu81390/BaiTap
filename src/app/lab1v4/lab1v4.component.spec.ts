import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab1v4Component } from './lab1v4.component';

describe('Lab1v4Component', () => {
  let component: Lab1v4Component;
  let fixture: ComponentFixture<Lab1v4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lab1v4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab1v4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
