import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuestaEmpleadorComponent } from './encuesta-empleador.component';

describe('EncuestaEmpleadorComponent', () => {
  let component: EncuestaEmpleadorComponent;
  let fixture: ComponentFixture<EncuestaEmpleadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncuestaEmpleadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncuestaEmpleadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
