import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarTipoSituacionComponent } from './borrar-tipo-situacion.component';

describe('BorrarTipoSituacionComponent', () => {
  let component: BorrarTipoSituacionComponent;
  let fixture: ComponentFixture<BorrarTipoSituacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrarTipoSituacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarTipoSituacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
