import { TestBed } from '@angular/core/testing';

import { ListaUsersResolveService } from './lista-users-resolve.service';

describe('ListaUsersResolveService', () => {
  let service: ListaUsersResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaUsersResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
