import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaClasificacionesAlarmasComponent } from './lista-clasificaciones-alarmas.component';

describe('ListaClasificacionesAlarmasComponent', () => {
  let component: ListaClasificacionesAlarmasComponent;
  let fixture: ComponentFixture<ListaClasificacionesAlarmasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaClasificacionesAlarmasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaClasificacionesAlarmasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
