import { TestBed } from '@angular/core/testing';

import { DetallesTipoSituacionService } from './detalles-tipo-situacion.service';

describe('DetallesTipoSituacionService', () => {
  let service: DetallesTipoSituacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetallesTipoSituacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
