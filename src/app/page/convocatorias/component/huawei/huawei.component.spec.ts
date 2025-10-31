import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuaweiComponent } from './huawei.component';

describe('HuaweiComponent', () => {
  let component: HuaweiComponent;
  let fixture: ComponentFixture<HuaweiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HuaweiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HuaweiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
