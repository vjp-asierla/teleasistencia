import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTipoCentroSanitarioComponent } from './item-tipo-centro-sanitario.component';

describe('ItemTipoCentroSanitarioComponent', () => {
  let component: ItemTipoCentroSanitarioComponent;
  let fixture: ComponentFixture<ItemTipoCentroSanitarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemTipoCentroSanitarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemTipoCentroSanitarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
