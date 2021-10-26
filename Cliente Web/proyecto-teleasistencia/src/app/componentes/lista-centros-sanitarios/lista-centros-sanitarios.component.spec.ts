import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCentrosSanitariosComponent } from './lista-centros-sanitarios.component';

describe('ListaCentrosSanitariosComponent', () => {
  let component: ListaCentrosSanitariosComponent;
  let fixture: ComponentFixture<ListaCentrosSanitariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCentrosSanitariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCentrosSanitariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
