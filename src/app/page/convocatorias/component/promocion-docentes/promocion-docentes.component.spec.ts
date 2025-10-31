import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromocionDocentesComponent } from './promocion-docentes.component';

describe('PromocionDocentesComponent', () => {
  let component: PromocionDocentesComponent;
  let fixture: ComponentFixture<PromocionDocentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromocionDocentesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromocionDocentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
