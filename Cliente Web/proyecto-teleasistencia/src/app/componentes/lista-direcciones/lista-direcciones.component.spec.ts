import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDireccionesComponent } from './lista-direcciones.component';

describe('ListaDireccionesComponent', () => {
  let component: ListaDireccionesComponent;
  let fixture: ComponentFixture<ListaDireccionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDireccionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDireccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
