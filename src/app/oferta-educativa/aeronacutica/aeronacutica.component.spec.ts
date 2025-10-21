import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AeronacuticaComponent } from './aeronacutica.component';

describe('AeronacuticaComponent', () => {
  let component: AeronacuticaComponent;
  let fixture: ComponentFixture<AeronacuticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AeronacuticaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AeronacuticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
