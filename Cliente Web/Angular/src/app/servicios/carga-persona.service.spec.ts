import { TestBed } from '@angular/core/testing';

import { CargaPersonaService } from './carga-persona.service';

describe('CargaPersonaService', () => {
  let service: CargaPersonaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargaPersonaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
