import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearDireccionComponent } from './crear-direccion.component';

describe('NuevaDireccionComponent', () => {
  let component: CrearDireccionComponent;
  let fixture: ComponentFixture<CrearDireccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearDireccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearDireccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
