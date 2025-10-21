import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContraloresSocialesComponent } from './contralores-sociales.component';

describe('ContraloresSocialesComponent', () => {
  let component: ContraloresSocialesComponent;
  let fixture: ComponentFixture<ContraloresSocialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContraloresSocialesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContraloresSocialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
