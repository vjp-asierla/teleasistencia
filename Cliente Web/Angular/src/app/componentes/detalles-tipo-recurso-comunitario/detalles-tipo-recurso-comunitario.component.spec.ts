import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesTipoRecursoComunitarioComponent } from './detalles-tipo-recurso-comunitario.component';

describe('DetallesTipoRecursoComunitarioComponent', () => {
  let component: DetallesTipoRecursoComunitarioComponent;
  let fixture: ComponentFixture<DetallesTipoRecursoComunitarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesTipoRecursoComunitarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesTipoRecursoComunitarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
