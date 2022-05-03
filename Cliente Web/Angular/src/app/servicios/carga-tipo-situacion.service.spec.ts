import { TestBed } from '@angular/core/testing';

import { CargaTipoSituacionService } from './carga-tipo-situacion.service';

describe('CargaTipoSituacionService', () => {
  let service: CargaTipoSituacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargaTipoSituacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
