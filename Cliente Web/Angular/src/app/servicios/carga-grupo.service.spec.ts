import { TestBed } from '@angular/core/testing';

import { CargaGrupoService } from './carga-grupo.service';

describe('CargaGrupoService', () => {
  let service: CargaGrupoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargaGrupoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
