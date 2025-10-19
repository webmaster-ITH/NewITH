import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Residencias2Component } from './residencias2.component';

describe('Residencias2Component', () => {
  let component: Residencias2Component;
  let fixture: ComponentFixture<Residencias2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Residencias2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Residencias2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
