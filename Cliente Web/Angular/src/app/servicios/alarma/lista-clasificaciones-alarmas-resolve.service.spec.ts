import { TestBed } from '@angular/core/testing';

import { ListaClasificacionesAlarmasResolveService } from './lista-clasificaciones-alarmas-resolve.service';

describe('ListaClasificacionesAlarmaResolveService', () => {
  let service: ListaClasificacionesAlarmasResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaClasificacionesAlarmasResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
