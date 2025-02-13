import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThermalmapdiscribtionComponent } from './thermalmapdiscribtion.component';

describe('ThermalmapdiscribtionComponent', () => {
  let component: ThermalmapdiscribtionComponent;
  let fixture: ComponentFixture<ThermalmapdiscribtionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThermalmapdiscribtionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThermalmapdiscribtionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
