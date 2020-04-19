import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleTainingModalComponent } from './schedule-taining-modal.component';

describe('ScheduleTainingModalComponent', () => {
  let component: ScheduleTainingModalComponent;
  let fixture: ComponentFixture<ScheduleTainingModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleTainingModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleTainingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
