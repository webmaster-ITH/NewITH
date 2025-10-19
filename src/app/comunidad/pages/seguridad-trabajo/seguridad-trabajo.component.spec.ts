import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguridadTrabajoComponent } from './seguridad-trabajo.component';

describe('SeguridadTrabajoComponent', () => {
  let component: SeguridadTrabajoComponent;
  let fixture: ComponentFixture<SeguridadTrabajoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeguridadTrabajoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeguridadTrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
