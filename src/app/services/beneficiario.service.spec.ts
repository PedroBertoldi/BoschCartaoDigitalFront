import { TestBed } from '@angular/core/testing';

import { BeneficiarioService } from './beneficiario.service';

describe('BeneficiarioService', () => {
  let service: BeneficiarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeneficiarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
