import { TestBed } from '@angular/core/testing';

import { DetallesCentroSanitarioResolveService } from './detalles-centro-sanitario-resolve.service';

describe('DetallesCentroSanitarioResolveService', () => {
  let service: DetallesCentroSanitarioResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetallesCentroSanitarioResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
