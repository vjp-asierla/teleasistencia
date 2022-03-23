import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonesLoginComponent } from './botones-login.component';

describe('BotonesLoginComponent', () => {
  let component: BotonesLoginComponent;
  let fixture: ComponentFixture<BotonesLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonesLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonesLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
