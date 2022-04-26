import { TestBed } from '@angular/core/testing';

import { ListaSituacionesService } from './lista-situaciones.service';

describe('ListaSituacionesService', () => {
  let service: ListaSituacionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaSituacionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
