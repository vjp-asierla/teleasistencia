import { TestBed } from '@angular/core/testing';

import { ListaPersonasResolveService } from './lista-personas-resolve.service';

describe('ListaPersonasResolveService', () => {
  let service: ListaPersonasResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaPersonasResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
