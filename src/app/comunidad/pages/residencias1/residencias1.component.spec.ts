import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Residencias1Component } from './residencias1.component';

describe('Residencias1Component', () => {
  let component: Residencias1Component;
  let fixture: ComponentFixture<Residencias1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Residencias1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Residencias1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
