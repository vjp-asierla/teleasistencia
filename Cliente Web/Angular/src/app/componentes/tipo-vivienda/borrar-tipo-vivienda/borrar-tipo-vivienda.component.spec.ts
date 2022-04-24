import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarTipoViviendaComponent } from './borrar-tipo-vivienda.component';

describe('BorrarTipoViviendaComponent', () => {
  let component: BorrarTipoViviendaComponent;
  let fixture: ComponentFixture<BorrarTipoViviendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrarTipoViviendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarTipoViviendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
