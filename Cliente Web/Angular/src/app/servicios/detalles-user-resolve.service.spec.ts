import { TestBed } from '@angular/core/testing';

import { DetallesUserResolveService } from './detalles-user-resolve.service';

describe('DetallesUserResolveService', () => {
  let service: DetallesUserResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetallesUserResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
