import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkmanComponent } from './skman.component';

describe('SkmanComponent', () => {
  let component: SkmanComponent;
  let fixture: ComponentFixture<SkmanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SkmanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
