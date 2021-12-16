import { TestBed } from '@angular/core/testing';

import { CargaTipoCentroSanitarioService } from './carga-tipo-centro-sanitario.service';

describe('CargaTipoCentroSanitarioService', () => {
  let service: CargaTipoCentroSanitarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargaTipoCentroSanitarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
