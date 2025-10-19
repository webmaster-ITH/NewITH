import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Residencias3Component } from './residencias3.component';

describe('Residencias3Component', () => {
  let component: Residencias3Component;
  let fixture: ComponentFixture<Residencias3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Residencias3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Residencias3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
