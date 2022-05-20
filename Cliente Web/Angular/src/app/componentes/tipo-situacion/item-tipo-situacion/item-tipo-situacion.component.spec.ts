import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTipoSituacionComponent } from './item-tipo-situacion.component';

describe('ItemTipoSituacionComponent', () => {
  let component: ItemTipoSituacionComponent;
  let fixture: ComponentFixture<ItemTipoSituacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemTipoSituacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemTipoSituacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
