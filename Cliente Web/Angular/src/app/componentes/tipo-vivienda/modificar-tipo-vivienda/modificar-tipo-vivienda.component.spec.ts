import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarTipoViviendaComponent } from './modificar-tipo-vivienda.component';

describe('DetallesTipoViviendaComponent', () => {
  let component: ModificarTipoViviendaComponent;
  let fixture: ComponentFixture<ModificarTipoViviendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarTipoViviendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarTipoViviendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
