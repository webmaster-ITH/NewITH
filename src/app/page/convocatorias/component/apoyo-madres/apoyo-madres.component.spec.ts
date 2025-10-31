import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApoyoMadresComponent } from './apoyo-madres.component';

describe('ApoyoMadresComponent', () => {
  let component: ApoyoMadresComponent;
  let fixture: ComponentFixture<ApoyoMadresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApoyoMadresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApoyoMadresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
