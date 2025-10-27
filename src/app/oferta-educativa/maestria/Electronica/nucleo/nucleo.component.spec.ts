import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NucleoComponent } from './nucleo.component';

describe('NucleoComponent', () => {
  let component: NucleoComponent;
  let fixture: ComponentFixture<NucleoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NucleoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NucleoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
