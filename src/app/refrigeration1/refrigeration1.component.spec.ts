import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Refrigeration1Component } from './refrigeration1.component';

describe('Refrigeration1Component', () => {
  let component: Refrigeration1Component;
  let fixture: ComponentFixture<Refrigeration1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Refrigeration1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Refrigeration1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
