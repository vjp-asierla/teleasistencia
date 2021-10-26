import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoCentroSanitarioComponent } from './nuevo-centro-sanitario.component';

describe('NuevoCentroSanitarioComponent', () => {
  let component: NuevoCentroSanitarioComponent;
  let fixture: ComponentFixture<NuevoCentroSanitarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoCentroSanitarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoCentroSanitarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
