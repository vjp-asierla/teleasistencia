import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTipoSituacionComponent } from './crear-tipo-situacion.component';

describe('NuevoTipoSituacionComponent', () => {
  let component: CrearTipoSituacionComponent;
  let fixture: ComponentFixture<CrearTipoSituacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearTipoSituacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearTipoSituacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
