import { TestBed } from '@angular/core/testing';

import { ListaTiposModalidadesPacientesResolveService } from './lista-tipos-modalidades-pacientes-resolve.service';

describe('ListaTiposModalidadesPacientesResolveService', () => {
  let service: ListaTiposModalidadesPacientesResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaTiposModalidadesPacientesResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
