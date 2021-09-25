import { TestBed } from '@angular/core/testing';

import { CargaServidorService } from './carga-servidor.service';

describe('CargaServidorService', () => {
  let service: CargaServidorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargaServidorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
