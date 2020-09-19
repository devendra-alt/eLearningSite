import { TestBed } from '@angular/core/testing';

import { MessService } from './mess.service';

describe('MessService', () => {
  let service: MessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
