import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainheaderComponent } from './mainheader.component';

describe('MainheaderComponent', () => {
  let component: MainheaderComponent;
  let fixture: ComponentFixture<MainheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
