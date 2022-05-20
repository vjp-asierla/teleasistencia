import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTiposViviendaComponent } from './lista-tipos-vivienda.component';

describe('ListaTiposViviendaComponent', () => {
  let component: ListaTiposViviendaComponent;
  let fixture: ComponentFixture<ListaTiposViviendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaTiposViviendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTiposViviendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
