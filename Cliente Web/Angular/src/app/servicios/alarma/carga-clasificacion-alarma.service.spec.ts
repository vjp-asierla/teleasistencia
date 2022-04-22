import { TestBed } from '@angular/core/testing';

import { CargaClasificacionAlarmaService } from './carga-clasificacion-alarma.service';

describe('CargaClasificacionAlarmaService', () => {
  let service: CargaClasificacionAlarmaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargaClasificacionAlarmaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
