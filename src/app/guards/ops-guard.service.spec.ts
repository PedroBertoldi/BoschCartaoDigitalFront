import { TestBed } from '@angular/core/testing';

import { OpsGuardService } from './ops-guard.service';

describe('OpsGuardService', () => {
  let service: OpsGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpsGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
