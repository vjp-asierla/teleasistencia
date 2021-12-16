import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesTipoModalidadPacienteComponent } from './detalles-tipo-modalidad-paciente.component';

describe('DetallesTipoModalidadPacienteComponent', () => {
  let component: DetallesTipoModalidadPacienteComponent;
  let fixture: ComponentFixture<DetallesTipoModalidadPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesTipoModalidadPacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesTipoModalidadPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
