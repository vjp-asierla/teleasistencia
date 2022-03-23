import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesTipoCentroSanitarioComponent } from './detalles-tipo-centro-sanitario.component';

describe('DetallesTipoCentroSanitarioComponent', () => {
  let component: DetallesTipoCentroSanitarioComponent;
  let fixture: ComponentFixture<DetallesTipoCentroSanitarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesTipoCentroSanitarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesTipoCentroSanitarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
