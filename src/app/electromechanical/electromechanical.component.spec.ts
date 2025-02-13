import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectromechanicalComponent } from './electromechanical.component';

describe('ElectromechanicalComponent', () => {
  let component: ElectromechanicalComponent;
  let fixture: ComponentFixture<ElectromechanicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElectromechanicalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectromechanicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
