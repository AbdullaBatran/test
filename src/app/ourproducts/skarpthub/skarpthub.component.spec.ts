import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkarpthubComponent } from './skarpthub.component';

describe('SkarpthubComponent', () => {
  let component: SkarpthubComponent;
  let fixture: ComponentFixture<SkarpthubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SkarpthubComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkarpthubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
