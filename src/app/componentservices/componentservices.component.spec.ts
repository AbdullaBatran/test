import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentservicesComponent } from './componentservices.component';

describe('ComponentservicesComponent', () => {
  let component: ComponentservicesComponent;
  let fixture: ComponentFixture<ComponentservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponentservicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
