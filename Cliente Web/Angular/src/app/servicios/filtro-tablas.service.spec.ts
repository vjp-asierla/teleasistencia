import { TestBed } from '@angular/core/testing';

import { FiltroTablasService } from './filtro-tablas.service';

describe('FiltroTablasService', () => {
  let service: FiltroTablasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiltroTablasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
