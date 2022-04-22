import { TestBed } from '@angular/core/testing';

import { ListaTiposAlarmasResolveService } from './lista-tipos-alarmas-resolve.service';

describe('ListaTiposAlarmasResolveService', () => {
  let service: ListaTiposAlarmasResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaTiposAlarmasResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
