import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTiposSituacionComponent } from './lista-tipos-situacion.component';

describe('ListaTiposSituacionComponent', () => {
  let component: ListaTiposSituacionComponent;
  let fixture: ComponentFixture<ListaTiposSituacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaTiposSituacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTiposSituacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
