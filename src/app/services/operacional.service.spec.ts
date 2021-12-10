import { TestBed } from '@angular/core/testing';

import { OperacionalService } from './operacional.service';

describe('OperacionalService', () => {
  let service: OperacionalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OperacionalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
