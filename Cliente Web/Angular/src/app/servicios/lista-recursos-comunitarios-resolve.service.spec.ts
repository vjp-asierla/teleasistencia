import { TestBed } from '@angular/core/testing';

import { ListaRecursosComunitariosResolveService } from './lista-recursos-comunitarios-resolve.service';

describe('ListaRecursosComunitariosResolveService', () => {
  let service: ListaRecursosComunitariosResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaRecursosComunitariosResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
