import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesPersonaComponent } from './detalles-persona.component';

describe('DetallesPersonaComponent', () => {
  let component: DetallesPersonaComponent;
  let fixture: ComponentFixture<DetallesPersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesPersonaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
