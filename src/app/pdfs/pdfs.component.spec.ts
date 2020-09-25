import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfsComponent } from './pdfs.component';

describe('PdfsComponent', () => {
  let component: PdfsComponent;
  let fixture: ComponentFixture<PdfsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
