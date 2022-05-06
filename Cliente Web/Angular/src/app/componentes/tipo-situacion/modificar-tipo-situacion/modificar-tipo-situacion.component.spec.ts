import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarTipoSituacionComponent } from './modificar-tipo-situacion.component';

describe('DetallesTipoSituacionComponent', () => {
  let component: ModificarTipoSituacionComponent;
  let fixture: ComponentFixture<ModificarTipoSituacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarTipoSituacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarTipoSituacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
