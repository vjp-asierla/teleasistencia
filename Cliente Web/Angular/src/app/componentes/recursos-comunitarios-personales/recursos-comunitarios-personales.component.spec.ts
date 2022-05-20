import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecursosComunitariosPersonalesComponent } from './recursos-comunitarios-personales.component';

describe('RecursosComunitariosPersonalesComponent', () => {
  let component: RecursosComunitariosPersonalesComponent;
  let fixture: ComponentFixture<RecursosComunitariosPersonalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecursosComunitariosPersonalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecursosComunitariosPersonalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
