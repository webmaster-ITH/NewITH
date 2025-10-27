import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvocatoriaComputacionComponent } from './convocatoria-computacion.component';

describe('ConvocatoriaComputacionComponent', () => {
  let component: ConvocatoriaComputacionComponent;
  let fixture: ComponentFixture<ConvocatoriaComputacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvocatoriaComputacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConvocatoriaComputacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
