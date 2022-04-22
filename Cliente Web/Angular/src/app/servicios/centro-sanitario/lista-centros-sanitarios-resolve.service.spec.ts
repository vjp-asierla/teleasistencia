import { TestBed } from '@angular/core/testing';

import { ListaCentrosSanitariosResolveService } from './lista-centros-sanitarios-resolve.service';

describe('ListaCentrosSanitariosResolveService', () => {
  let service: ListaCentrosSanitariosResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaCentrosSanitariosResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
