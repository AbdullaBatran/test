import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Supplies1Component } from './supplies1.component';

describe('Supplies1Component', () => {
  let component: Supplies1Component;
  let fixture: ComponentFixture<Supplies1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Supplies1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Supplies1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
