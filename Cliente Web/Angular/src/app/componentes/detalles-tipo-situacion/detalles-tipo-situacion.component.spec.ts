import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesTipoSituacionComponent } from './detalles-tipo-situacion.component';

describe('DetallesTipoSituacionComponent', () => {
  let component: DetallesTipoSituacionComponent;
  let fixture: ComponentFixture<DetallesTipoSituacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesTipoSituacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesTipoSituacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
