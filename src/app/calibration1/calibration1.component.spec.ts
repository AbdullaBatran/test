import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Calibration1Component } from './calibration1.component';

describe('Calibration1Component', () => {
  let component: Calibration1Component;
  let fixture: ComponentFixture<Calibration1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Calibration1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Calibration1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
