import { TestBed } from '@angular/core/testing';

import { CargaViviendaService } from './carga-vivienda.service';

describe('CargaViviendaService', () => {
  let service: CargaViviendaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargaViviendaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
