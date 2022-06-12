import { TestBed } from '@angular/core/testing';

import { ReaderGuardService } from './reader-guard.service';

describe('ReaderGuardService', () => {
  let service: ReaderGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReaderGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
