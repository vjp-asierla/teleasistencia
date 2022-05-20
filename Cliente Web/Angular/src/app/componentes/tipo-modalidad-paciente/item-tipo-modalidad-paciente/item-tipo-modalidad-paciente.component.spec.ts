import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTipoModalidadPacienteComponent } from './item-tipo-modalidad-paciente.component';

describe('ItemTipoModalidadPacienteComponent', () => {
  let component: ItemTipoModalidadPacienteComponent;
  let fixture: ComponentFixture<ItemTipoModalidadPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemTipoModalidadPacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemTipoModalidadPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
