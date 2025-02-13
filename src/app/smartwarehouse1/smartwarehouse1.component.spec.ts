import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Smartwarehouse1Component } from './smartwarehouse1.component';

describe('Smartwarehouse1Component', () => {
  let component: Smartwarehouse1Component;
  let fixture: ComponentFixture<Smartwarehouse1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Smartwarehouse1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Smartwarehouse1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
