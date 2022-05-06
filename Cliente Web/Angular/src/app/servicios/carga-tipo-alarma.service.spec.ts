import { TestBed } from '@angular/core/testing';

import { CargaTipoAlarmaService } from './carga-tipo-alarma.service';

describe('CargaTipoAlarmaService', () => {
  let service: CargaTipoAlarmaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargaTipoAlarmaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
