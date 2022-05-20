import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTipoModalidadPacienteComponent } from './crear-tipo-modalidad-paciente.component';

describe('NuevoTipoModalidadPacienteComponent', () => {
  let component: CrearTipoModalidadPacienteComponent;
  let fixture: ComponentFixture<CrearTipoModalidadPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearTipoModalidadPacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearTipoModalidadPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
