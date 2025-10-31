import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapacitacionMicrosoftComponent } from './capacitacion-microsoft.component';

describe('CapacitacionMicrosoftComponent', () => {
  let component: CapacitacionMicrosoftComponent;
  let fixture: ComponentFixture<CapacitacionMicrosoftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapacitacionMicrosoftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapacitacionMicrosoftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
