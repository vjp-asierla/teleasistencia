import { TestBed } from '@angular/core/testing';

import { DetallesTipoCentroSanitarioResolveService } from './detalles-tipo-centro-sanitario-resolve.service';

describe('DetallesTipoCentroSanitarioResolveService', () => {
  let service: DetallesTipoCentroSanitarioResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetallesTipoCentroSanitarioResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
