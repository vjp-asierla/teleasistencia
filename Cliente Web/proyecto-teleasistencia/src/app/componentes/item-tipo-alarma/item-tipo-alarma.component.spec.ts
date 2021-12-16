import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTipoAlarmaComponent } from './item-tipo-alarma.component';

describe('ItemTipoAlarmaComponent', () => {
  let component: ItemTipoAlarmaComponent;
  let fixture: ComponentFixture<ItemTipoAlarmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemTipoAlarmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemTipoAlarmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
