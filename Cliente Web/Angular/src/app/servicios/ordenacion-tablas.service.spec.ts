import { TestBed } from '@angular/core/testing';

import { OrdenacionTablasService } from './ordenacion-tablas.service';

describe('FiltroTablasService', () => {
  let service: OrdenacionTablasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdenacionTablasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
