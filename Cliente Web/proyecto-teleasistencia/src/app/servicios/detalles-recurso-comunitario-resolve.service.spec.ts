import { TestBed } from '@angular/core/testing';

import { DetallesRecursoComunitarioResolveService } from './detalles-recurso-comunitario-resolve.service';

describe('DetallesRecursoComunitarioResolveService', () => {
  let service: DetallesRecursoComunitarioResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetallesRecursoComunitarioResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
