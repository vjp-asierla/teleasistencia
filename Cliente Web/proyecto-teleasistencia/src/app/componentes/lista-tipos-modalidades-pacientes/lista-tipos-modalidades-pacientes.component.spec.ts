import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTiposModalidadesPacientesComponent } from './lista-tipos-modalidades-pacientes.component';

describe('ListaTiposModalidadesPacientesComponent', () => {
  let component: ListaTiposModalidadesPacientesComponent;
  let fixture: ComponentFixture<ListaTiposModalidadesPacientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaTiposModalidadesPacientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTiposModalidadesPacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
