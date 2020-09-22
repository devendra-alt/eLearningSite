import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopfooterComponent } from './shopfooter.component';

describe('ShopfooterComponent', () => {
  let component: ShopfooterComponent;
  let fixture: ComponentFixture<ShopfooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopfooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
