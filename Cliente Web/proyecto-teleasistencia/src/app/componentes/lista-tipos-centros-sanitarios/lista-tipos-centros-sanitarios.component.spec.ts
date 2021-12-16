import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTiposCentrosSanitariosComponent } from './lista-tipos-centros-sanitarios.component';

describe('ListaTiposCentrosSanitariosComponent', () => {
  let component: ListaTiposCentrosSanitariosComponent;
  let fixture: ComponentFixture<ListaTiposCentrosSanitariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaTiposCentrosSanitariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTiposCentrosSanitariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
