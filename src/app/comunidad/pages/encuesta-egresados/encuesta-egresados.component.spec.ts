import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuestaEgresadosComponent } from './encuesta-egresados.component';

describe('EncuestaEgresadosComponent', () => {
  let component: EncuestaEgresadosComponent;
  let fixture: ComponentFixture<EncuestaEgresadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncuestaEgresadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncuestaEgresadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
