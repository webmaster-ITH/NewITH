import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiieComponent } from './ciie.component';

describe('CiieComponent', () => {
  let component: CiieComponent;
  let fixture: ComponentFixture<CiieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CiieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CiieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
