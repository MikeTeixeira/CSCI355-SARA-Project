import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhaseThreeResultsComponent } from './phase-three-results.component';

describe('PhaseThreeResultsComponent', () => {
  let component: PhaseThreeResultsComponent;
  let fixture: ComponentFixture<PhaseThreeResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhaseThreeResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhaseThreeResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
