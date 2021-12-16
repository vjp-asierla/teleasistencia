import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoTipoCentroSanitarioComponent } from './nuevo-tipo-centro-sanitario.component';

describe('NuevoTipoCentroSanitarioComponent', () => {
  let component: NuevoTipoCentroSanitarioComponent;
  let fixture: ComponentFixture<NuevoTipoCentroSanitarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoTipoCentroSanitarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoTipoCentroSanitarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
