import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoRecursoComunitarioComponent } from './nuevo-recurso-comunitario.component';

describe('NuevoRecursoComunitarioComponent', () => {
  let component: NuevoRecursoComunitarioComponent;
  let fixture: ComponentFixture<NuevoRecursoComunitarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoRecursoComunitarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoRecursoComunitarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
