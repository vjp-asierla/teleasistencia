import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoTipoModalidadPacienteComponent } from './nuevo-tipo-modalidad-paciente.component';

describe('NuevoTipoModalidadPacienteComponent', () => {
  let component: NuevoTipoModalidadPacienteComponent;
  let fixture: ComponentFixture<NuevoTipoModalidadPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoTipoModalidadPacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoTipoModalidadPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
