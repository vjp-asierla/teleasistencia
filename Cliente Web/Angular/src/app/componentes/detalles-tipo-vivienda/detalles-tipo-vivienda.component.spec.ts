import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesTipoViviendaComponent } from './detalles-tipo-vivienda.component';

describe('DetallesTipoViviendaComponent', () => {
  let component: DetallesTipoViviendaComponent;
  let fixture: ComponentFixture<DetallesTipoViviendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesTipoViviendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesTipoViviendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
