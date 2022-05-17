import { TestBed } from '@angular/core/testing';

import { BorrarTipoViviendaService } from './borrar-tipo-vivienda.service';

describe('BorrarTipoViviendaService', () => {
  let service: BorrarTipoViviendaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BorrarTipoViviendaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
