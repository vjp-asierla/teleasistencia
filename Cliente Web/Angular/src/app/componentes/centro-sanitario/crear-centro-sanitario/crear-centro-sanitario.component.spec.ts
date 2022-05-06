import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCentroSanitarioComponent } from './crear-centro-sanitario.component';

describe('NuevoCentroSanitarioComponent', () => {
  let component: CrearCentroSanitarioComponent;
  let fixture: ComponentFixture<CrearCentroSanitarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearCentroSanitarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearCentroSanitarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
