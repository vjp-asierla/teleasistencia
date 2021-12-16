import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaClasificacionAlarmaComponent } from './nueva-clasificacion-alarma.component';

describe('NuevaClasificacionAlarmaComponent', () => {
  let component: NuevaClasificacionAlarmaComponent;
  let fixture: ComponentFixture<NuevaClasificacionAlarmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaClasificacionAlarmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaClasificacionAlarmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
