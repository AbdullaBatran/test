import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkarptWComponent } from './skarpt-w.component';

describe('SkarptWComponent', () => {
  let component: SkarptWComponent;
  let fixture: ComponentFixture<SkarptWComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SkarptWComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkarptWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
