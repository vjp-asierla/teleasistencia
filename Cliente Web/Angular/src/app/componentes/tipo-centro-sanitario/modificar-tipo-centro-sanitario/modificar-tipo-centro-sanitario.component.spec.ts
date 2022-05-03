import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarTipoCentroSanitarioComponent } from './modificar-tipo-centro-sanitario.component';

describe('DetallesTipoCentroSanitarioComponent', () => {
  let component: ModificarTipoCentroSanitarioComponent;
  let fixture: ComponentFixture<ModificarTipoCentroSanitarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarTipoCentroSanitarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarTipoCentroSanitarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
