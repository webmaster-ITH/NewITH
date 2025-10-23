import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SGIGComponent } from './sgig.component';

describe('SGIGComponent', () => {
  let component: SGIGComponent;
  let fixture: ComponentFixture<SGIGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SGIGComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SGIGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
