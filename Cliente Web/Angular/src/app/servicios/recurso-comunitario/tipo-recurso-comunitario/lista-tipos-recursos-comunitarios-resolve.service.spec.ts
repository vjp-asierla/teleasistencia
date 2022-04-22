import { TestBed } from '@angular/core/testing';

import { ListaTiposRecursosComunitariosResolveService } from './lista-tipos-recursos-comunitarios-resolve.service';

describe('ListaTiposRecursosComunitariosResolveService', () => {
  let service: ListaTiposRecursosComunitariosResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaTiposRecursosComunitariosResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
