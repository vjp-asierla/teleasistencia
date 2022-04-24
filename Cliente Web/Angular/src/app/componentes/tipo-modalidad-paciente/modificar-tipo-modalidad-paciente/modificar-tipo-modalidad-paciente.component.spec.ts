import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarTipoModalidadPacienteComponent } from './modificar-tipo-modalidad-paciente.component';

describe('DetallesTipoModalidadPacienteComponent', () => {
  let component: ModificarTipoModalidadPacienteComponent;
  let fixture: ComponentFixture<ModificarTipoModalidadPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarTipoModalidadPacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarTipoModalidadPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
