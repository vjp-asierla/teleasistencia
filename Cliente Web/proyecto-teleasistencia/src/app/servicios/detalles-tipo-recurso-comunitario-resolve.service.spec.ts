import { TestBed } from '@angular/core/testing';

import { DetallesTipoRecursoComunitarioResolveService } from './detalles-tipo-recurso-comunitario-resolve.service';

describe('DetallesTipoRecursoComunitarioResolveService', () => {
  let service: DetallesTipoRecursoComunitarioResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetallesTipoRecursoComunitarioResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
