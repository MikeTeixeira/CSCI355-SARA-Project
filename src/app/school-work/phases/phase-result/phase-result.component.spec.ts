import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhaseResultComponent } from './phase-result.component';

describe('PhaseResultComponent', () => {
  let component: PhaseResultComponent;
  let fixture: ComponentFixture<PhaseResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhaseResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhaseResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
