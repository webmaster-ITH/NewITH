import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialServidoresPublicosComponent } from './material-servidores-publicos.component';

describe('MaterialServidoresPublicosComponent', () => {
  let component: MaterialServidoresPublicosComponent;
  let fixture: ComponentFixture<MaterialServidoresPublicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialServidoresPublicosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialServidoresPublicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
