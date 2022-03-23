import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaDireccionComponent } from './nueva-direccion.component';

describe('NuevaDireccionComponent', () => {
  let component: NuevaDireccionComponent;
  let fixture: ComponentFixture<NuevaDireccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaDireccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaDireccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
