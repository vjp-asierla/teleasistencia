import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTipoAlarmaComponent } from './crear-tipo-alarma.component';

describe('NuevoTipoAlarmaComponent', () => {
  let component: CrearTipoAlarmaComponent;
  let fixture: ComponentFixture<CrearTipoAlarmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearTipoAlarmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearTipoAlarmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
