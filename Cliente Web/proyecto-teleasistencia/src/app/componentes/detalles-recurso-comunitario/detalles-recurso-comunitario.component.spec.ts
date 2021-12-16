import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesRecursoComunitarioComponent } from './detalles-recurso-comunitario.component';

describe('DetallesRecursoComunitarioComponent', () => {
  let component: DetallesRecursoComunitarioComponent;
  let fixture: ComponentFixture<DetallesRecursoComunitarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesRecursoComunitarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesRecursoComunitarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
