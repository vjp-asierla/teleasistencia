import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoTipoAlarmaComponent } from './nuevo-tipo-alarma.component';

describe('NuevoTipoAlarmaComponent', () => {
  let component: NuevoTipoAlarmaComponent;
  let fixture: ComponentFixture<NuevoTipoAlarmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoTipoAlarmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoTipoAlarmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
