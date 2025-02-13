import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalibrationdiscribtionComponent } from './calibrationdiscribtion.component';

describe('CalibrationdiscribtionComponent', () => {
  let component: CalibrationdiscribtionComponent;
  let fixture: ComponentFixture<CalibrationdiscribtionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalibrationdiscribtionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalibrationdiscribtionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
