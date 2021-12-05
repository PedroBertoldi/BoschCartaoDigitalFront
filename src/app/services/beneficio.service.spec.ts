import { TestBed } from '@angular/core/testing';

import { BeneficioService } from './beneficio.service';

describe('BeneficioService', () => {
  let service: BeneficioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeneficioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
