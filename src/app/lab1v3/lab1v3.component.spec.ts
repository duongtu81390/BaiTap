import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab1v3Component } from './lab1v3.component';

describe('Lab1v3Component', () => {
  let component: Lab1v3Component;
  let fixture: ComponentFixture<Lab1v3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lab1v3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab1v3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
