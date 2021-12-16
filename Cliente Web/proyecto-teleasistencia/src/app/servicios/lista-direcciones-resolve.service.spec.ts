import { TestBed } from '@angular/core/testing';

import { ListaDireccionesResolveService } from './lista-direcciones-resolve.service';

describe('ListaDireccionesResolveService', () => {
  let service: ListaDireccionesResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaDireccionesResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
