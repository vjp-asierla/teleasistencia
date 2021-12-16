import { TestBed } from '@angular/core/testing';

import { CargaDireccionService } from './carga-direccion.service';

describe('CargaDireccionService', () => {
  let service: CargaDireccionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargaDireccionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
