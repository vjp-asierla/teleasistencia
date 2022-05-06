import { TestBed } from '@angular/core/testing';

import { ListaTiposCentrosSanitariosResolveService } from './lista-tipos-centros-sanitarios-resolve.service';

describe('ListaTiposCentrosSanitariosResolveService', () => {
  let service: ListaTiposCentrosSanitariosResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaTiposCentrosSanitariosResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
