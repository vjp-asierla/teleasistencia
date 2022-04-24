import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarCentroSanitarioComponent } from './modificar-centro-sanitario.component';

describe('DetallesCentroSanitarioComponent', () => {
  let component: ModificarCentroSanitarioComponent;
  let fixture: ComponentFixture<ModificarCentroSanitarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarCentroSanitarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarCentroSanitarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
