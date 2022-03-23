import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesCentroSanitarioComponent } from './detalles-centro-sanitario.component';

describe('DetallesCentroSanitarioComponent', () => {
  let component: DetallesCentroSanitarioComponent;
  let fixture: ComponentFixture<DetallesCentroSanitarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesCentroSanitarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesCentroSanitarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
