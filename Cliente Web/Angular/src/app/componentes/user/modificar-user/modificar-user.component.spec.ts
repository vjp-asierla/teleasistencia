import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarUserComponent } from './modificar-user.component';

describe('DetallesUserComponent', () => {
  let component: ModificarUserComponent;
  let fixture: ComponentFixture<ModificarUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
