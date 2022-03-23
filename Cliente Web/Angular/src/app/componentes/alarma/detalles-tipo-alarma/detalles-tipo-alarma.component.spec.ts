import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesTipoAlarmaComponent } from './detalles-tipo-alarma.component';

describe('DetallesTipoAlarmaComponent', () => {
  let component: DetallesTipoAlarmaComponent;
  let fixture: ComponentFixture<DetallesTipoAlarmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesTipoAlarmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesTipoAlarmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
