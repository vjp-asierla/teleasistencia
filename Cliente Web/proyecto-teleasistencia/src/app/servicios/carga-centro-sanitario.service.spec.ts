import { TestBed } from '@angular/core/testing';

import { CargaCentroSanitarioService } from './carga-centro-sanitario.service';

describe('CargaCentroSanitarioService', () => {
  let service: CargaCentroSanitarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargaCentroSanitarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
