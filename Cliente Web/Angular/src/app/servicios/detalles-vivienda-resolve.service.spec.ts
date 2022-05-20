import { TestBed } from '@angular/core/testing';

import { DetallesViviendaResolveService } from './detalles-vivienda-resolve.service';

describe('DetallesViviendaResolveService', () => {
  let service: DetallesViviendaResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetallesViviendaResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
