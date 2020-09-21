import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HmComponent } from './hm.component';

describe('HmComponent', () => {
  let component: HmComponent;
  let fixture: ComponentFixture<HmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
