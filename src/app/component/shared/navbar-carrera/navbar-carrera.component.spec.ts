import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarCarreraComponent } from './navbar-carrera.component';

describe('NavbarCarreraComponent', () => {
  let component: NavbarCarreraComponent;
  let fixture: ComponentFixture<NavbarCarreraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarCarreraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarCarreraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
