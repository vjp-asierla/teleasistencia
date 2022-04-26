import { TestBed } from '@angular/core/testing';

import { ListaViviendasResolveService } from './lista-viviendas-resolve.service';

describe('ListaViviendasResolveService', () => {
  let service: ListaViviendasResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaViviendasResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
