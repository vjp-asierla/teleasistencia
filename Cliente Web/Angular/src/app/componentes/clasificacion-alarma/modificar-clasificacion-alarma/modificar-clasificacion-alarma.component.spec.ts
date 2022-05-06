import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarClasificacionAlarmaComponent } from './modificar-clasificacion-alarma.component';

describe('DetallesClasificacionAlarmaComponent', () => {
  let component: ModificarClasificacionAlarmaComponent;
  let fixture: ComponentFixture<ModificarClasificacionAlarmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarClasificacionAlarmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarClasificacionAlarmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
