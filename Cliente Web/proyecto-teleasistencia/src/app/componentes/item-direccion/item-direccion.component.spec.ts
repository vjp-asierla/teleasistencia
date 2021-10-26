import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDireccionComponent } from './item-direccion.component';

describe('ItemDireccionComponent', () => {
  let component: ItemDireccionComponent;
  let fixture: ComponentFixture<ItemDireccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemDireccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDireccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
