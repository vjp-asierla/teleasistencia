import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearClasificacionAlarmaComponent } from './crear-clasificacion-alarma.component';

describe('NuevaClasificacionAlarmaComponent', () => {
  let component: CrearClasificacionAlarmaComponent;
  let fixture: ComponentFixture<CrearClasificacionAlarmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearClasificacionAlarmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearClasificacionAlarmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
