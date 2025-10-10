import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaslistComponent } from './noticiaslist.component';

describe('NoticiaslistComponent', () => {
  let component: NoticiaslistComponent;
  let fixture: ComponentFixture<NoticiaslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiaslistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticiaslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
