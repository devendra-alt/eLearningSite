import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homepagenave12Component } from './homepagenave12.component';

describe('Homepagenave12Component', () => {
  let component: Homepagenave12Component;
  let fixture: ComponentFixture<Homepagenave12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Homepagenave12Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Homepagenave12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
