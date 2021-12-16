import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesDireccionComponent } from './detalles-direccion.component';

describe('DetallesDireccionComponent', () => {
  let component: DetallesDireccionComponent;
  let fixture: ComponentFixture<DetallesDireccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesDireccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesDireccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
