import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemClasificacionAlarmaComponent } from './item-clasificacion-alarma.component';

describe('ItemClasificacionAlarmaComponent', () => {
  let component: ItemClasificacionAlarmaComponent;
  let fixture: ComponentFixture<ItemClasificacionAlarmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemClasificacionAlarmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemClasificacionAlarmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
