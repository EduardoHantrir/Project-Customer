import { TestBed } from '@angular/core/testing';

import { CepServices } from './cep.services';

describe('CepServices', () => {
  let service: CepServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CepServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
