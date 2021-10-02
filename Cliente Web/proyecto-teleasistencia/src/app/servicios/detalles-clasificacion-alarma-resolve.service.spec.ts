import { TestBed } from '@angular/core/testing';

import { DetallesClasificacionAlarmaResolveService } from './detalles-clasificacion-alarma-resolve.service';

describe('DetallesClasificacionAlarmaResolveService', () => {
  let service: DetallesClasificacionAlarmaResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetallesClasificacionAlarmaResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
