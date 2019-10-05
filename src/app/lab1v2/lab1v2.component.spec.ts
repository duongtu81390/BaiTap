import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab1v2Component } from './lab1v2.component';

describe('Lab1v2Component', () => {
  let component: Lab1v2Component;
  let fixture: ComponentFixture<Lab1v2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lab1v2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab1v2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
