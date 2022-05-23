import { TestBed } from '@angular/core/testing';

import { ListaDesarrolladorTecnologiaResolveService } from './lista-desarrollador-tecnologia-resolve.service';

describe('ListaDesarrolladorTecnologiaResolveService', () => {
  let service: ListaDesarrolladorTecnologiaResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaDesarrolladorTecnologiaResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
