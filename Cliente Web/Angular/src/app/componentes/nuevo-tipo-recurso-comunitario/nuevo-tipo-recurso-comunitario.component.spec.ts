import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoTipoRecursoComunitarioComponent } from './nuevo-tipo-recurso-comunitario.component';

describe('NuevoTipoRecursoComunitarioComponent', () => {
  let component: NuevoTipoRecursoComunitarioComponent;
  let fixture: ComponentFixture<NuevoTipoRecursoComunitarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoTipoRecursoComunitarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoTipoRecursoComunitarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
