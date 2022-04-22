import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarDireccionComponent } from './borrar-direccion.component';

describe('BorrarDireccionComponent', () => {
  let component: BorrarDireccionComponent;
  let fixture: ComponentFixture<BorrarDireccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrarDireccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarDireccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
