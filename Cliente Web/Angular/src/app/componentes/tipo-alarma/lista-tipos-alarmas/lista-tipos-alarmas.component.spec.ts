import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTiposAlarmasComponent } from './lista-tipos-alarmas.component';

describe('ListaTiposAlarmasComponent', () => {
  let component: ListaTiposAlarmasComponent;
  let fixture: ComponentFixture<ListaTiposAlarmasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaTiposAlarmasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTiposAlarmasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
