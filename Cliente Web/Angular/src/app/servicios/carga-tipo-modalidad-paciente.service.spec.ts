import { TestBed } from '@angular/core/testing';

import { CargaTipoModalidadPacienteService } from './carga-tipo-modalidad-paciente.service';

describe('CargaTipoModalidadPacienteService', () => {
  let service: CargaTipoModalidadPacienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargaTipoModalidadPacienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
