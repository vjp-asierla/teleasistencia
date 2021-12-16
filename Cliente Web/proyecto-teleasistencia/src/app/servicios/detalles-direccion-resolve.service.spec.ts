import { TestBed } from '@angular/core/testing';

import { DetallesDireccionResolveService } from './detalles-direccion-resolve.service';

describe('DetallesDireccionResolveService', () => {
  let service: DetallesDireccionResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetallesDireccionResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
