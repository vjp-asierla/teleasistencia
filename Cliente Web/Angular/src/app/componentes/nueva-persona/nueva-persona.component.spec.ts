import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaPersonaComponent } from './nueva-persona.component';

describe('NuevaPersonaComponent', () => {
  let component: NuevaPersonaComponent;
  let fixture: ComponentFixture<NuevaPersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaPersonaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
