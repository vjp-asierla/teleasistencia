import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCentroSanitarioComponent } from './item-centro-sanitario.component';

describe('ItemCentroSanitarioComponent', () => {
  let component: ItemCentroSanitarioComponent;
  let fixture: ComponentFixture<ItemCentroSanitarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemCentroSanitarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCentroSanitarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
