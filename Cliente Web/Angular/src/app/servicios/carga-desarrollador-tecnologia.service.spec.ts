import { TestBed } from '@angular/core/testing';

import { CargaDesarrolladorTecnologiaService } from './carga-desarrollador-tecnologia.service';

describe('CargaDesarrolladorTecnologiaService', () => {
  let service: CargaDesarrolladorTecnologiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargaDesarrolladorTecnologiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
