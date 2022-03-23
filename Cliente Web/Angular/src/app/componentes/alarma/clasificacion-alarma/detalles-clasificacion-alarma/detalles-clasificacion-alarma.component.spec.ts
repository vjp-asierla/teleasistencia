import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesClasificacionAlarmaComponent } from './detalles-clasificacion-alarma.component';

describe('DetallesClasificacionAlarmaComponent', () => {
  let component: DetallesClasificacionAlarmaComponent;
  let fixture: ComponentFixture<DetallesClasificacionAlarmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesClasificacionAlarmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesClasificacionAlarmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
