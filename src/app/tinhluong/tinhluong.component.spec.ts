import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TinhluongComponent } from './tinhluong.component';

describe('TinhluongComponent', () => {
  let component: TinhluongComponent;
  let fixture: ComponentFixture<TinhluongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TinhluongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TinhluongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
