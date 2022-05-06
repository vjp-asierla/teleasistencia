import { TestBed } from '@angular/core/testing';

import { DetallesTipoAlarmaResolveService } from './detalles-tipo-alarma-resolve.service';

describe('DetallesTipoAlarmaResolveService', () => {
  let service: DetallesTipoAlarmaResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetallesTipoAlarmaResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
