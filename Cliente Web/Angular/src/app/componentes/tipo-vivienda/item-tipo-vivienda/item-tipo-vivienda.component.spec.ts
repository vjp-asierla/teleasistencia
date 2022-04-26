import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTipoViviendaComponent } from './item-tipo-vivienda.component';

describe('ItemTipoViviendaComponent', () => {
  let component: ItemTipoViviendaComponent;
  let fixture: ComponentFixture<ItemTipoViviendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemTipoViviendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemTipoViviendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
