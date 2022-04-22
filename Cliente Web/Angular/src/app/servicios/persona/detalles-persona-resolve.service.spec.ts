import { TestBed } from '@angular/core/testing';

import { DetallesPersonaResolveService } from './detalles-persona-resolve.service';

describe('DetallesPersonaResolveService', () => {
  let service: DetallesPersonaResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetallesPersonaResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
