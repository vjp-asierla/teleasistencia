import { TestBed } from '@angular/core/testing';

import { DetallesTipoModalidadPacienteResolveService } from './detalles-tipo-modalidad-paciente-resolve.service';

describe('DetallesTipoModalidadPacienteResolveService', () => {
  let service: DetallesTipoModalidadPacienteResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetallesTipoModalidadPacienteResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
