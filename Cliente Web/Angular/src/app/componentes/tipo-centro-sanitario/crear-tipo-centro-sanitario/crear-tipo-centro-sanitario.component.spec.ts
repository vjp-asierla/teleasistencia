import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTipoCentroSanitarioComponent } from './crear-tipo-centro-sanitario.component';

describe('NuevoTipoCentroSanitarioComponent', () => {
  let component: CrearTipoCentroSanitarioComponent;
  let fixture: ComponentFixture<CrearTipoCentroSanitarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearTipoCentroSanitarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearTipoCentroSanitarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
