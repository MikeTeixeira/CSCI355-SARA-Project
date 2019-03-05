import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavPhasesComponent } from './nav-phases.component';

describe('NavPhasesComponent', () => {
  let component: NavPhasesComponent;
  let fixture: ComponentFixture<NavPhasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavPhasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavPhasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
