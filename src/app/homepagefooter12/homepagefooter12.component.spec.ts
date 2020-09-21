import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homepagefooter12Component } from './homepagefooter12.component';

describe('Homepagefooter12Component', () => {
  let component: Homepagefooter12Component;
  let fixture: ComponentFixture<Homepagefooter12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Homepagefooter12Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Homepagefooter12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
