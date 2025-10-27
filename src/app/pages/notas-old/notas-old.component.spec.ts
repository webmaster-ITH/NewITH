import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasOldComponent } from './notas-old.component';

describe('NotasOldComponent', () => {
  let component: NotasOldComponent;
  let fixture: ComponentFixture<NotasOldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotasOldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotasOldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
