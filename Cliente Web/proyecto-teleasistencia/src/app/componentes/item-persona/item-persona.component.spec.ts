import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPersonaComponent } from './item-persona.component';

describe('ItemPersonaComponent', () => {
  let component: ItemPersonaComponent;
  let fixture: ComponentFixture<ItemPersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemPersonaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
