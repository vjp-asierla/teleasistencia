import { TestBed } from '@angular/core/testing';

import { ListaGruposService } from './lista-grupos.service';

describe('ListaGruposService', () => {
  let service: ListaGruposService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaGruposService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
