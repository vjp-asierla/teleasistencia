import { TestBed } from '@angular/core/testing';

import { BorrarTipoSituacionService } from './borrar-tipo-situacion.service';

describe('BorrarTipoSituacionService', () => {
  let service: BorrarTipoSituacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BorrarTipoSituacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
