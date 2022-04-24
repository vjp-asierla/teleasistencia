import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarTipoAlarmaComponent } from './modificar-tipo-alarma.component';

describe('DetallesTipoAlarmaComponent', () => {
  let component: ModificarTipoAlarmaComponent;
  let fixture: ComponentFixture<ModificarTipoAlarmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarTipoAlarmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarTipoAlarmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
