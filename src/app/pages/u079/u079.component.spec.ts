import { ComponentFixture, TestBed } from '@angular/core/testing';

import { U079Component } from './u079.component';

describe('U079Component', () => {
  let component: U079Component;
  let fixture: ComponentFixture<U079Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ U079Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(U079Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
