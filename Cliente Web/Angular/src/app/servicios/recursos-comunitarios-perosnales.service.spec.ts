import { TestBed } from '@angular/core/testing';

import { RecursosComunitariosPerosnalesService } from './recursos-comunitarios-perosnales.service';

describe('RecursosComunitariosPerosnalesService', () => {
  let service: RecursosComunitariosPerosnalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecursosComunitariosPerosnalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
