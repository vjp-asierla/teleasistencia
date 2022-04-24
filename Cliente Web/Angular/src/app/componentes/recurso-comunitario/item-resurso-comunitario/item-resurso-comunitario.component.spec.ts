import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemResursoComunitarioComponent } from './item-resurso-comunitario.component';

describe('ItemResursoComunitarioComponent', () => {
  let component: ItemResursoComunitarioComponent;
  let fixture: ComponentFixture<ItemResursoComunitarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemResursoComunitarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemResursoComunitarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
