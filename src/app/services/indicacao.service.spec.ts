import { TestBed } from '@angular/core/testing';

import { IndicacaoService } from './indicacao.service';

describe('IndicacaoService', () => {
  let service: IndicacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndicacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
