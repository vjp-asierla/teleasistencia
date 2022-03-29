import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaViviendaComponent } from './nueva-vivienda.component';

describe('NuevaViviendaComponent', () => {
  let component: NuevaViviendaComponent;
  let fixture: ComponentFixture<NuevaViviendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaViviendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaViviendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
