import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualificationdiscribtionComponent } from './qualificationdiscribtion.component';

describe('QualificationdiscribtionComponent', () => {
  let component: QualificationdiscribtionComponent;
  let fixture: ComponentFixture<QualificationdiscribtionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QualificationdiscribtionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QualificationdiscribtionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
