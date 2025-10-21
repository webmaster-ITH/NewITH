import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemiconductoresComponent } from './semiconductores.component';

describe('SemiconductoresComponent', () => {
  let component: SemiconductoresComponent;
  let fixture: ComponentFixture<SemiconductoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SemiconductoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SemiconductoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
