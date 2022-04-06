import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoTipoSituacionComponent } from './nuevo-tipo-situacion.component';

describe('NuevoTipoSituacionComponent', () => {
  let component: NuevoTipoSituacionComponent;
  let fixture: ComponentFixture<NuevoTipoSituacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoTipoSituacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoTipoSituacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
