import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OursystemComponent } from './oursystem.component';

describe('OursystemComponent', () => {
  let component: OursystemComponent;
  let fixture: ComponentFixture<OursystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OursystemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OursystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
