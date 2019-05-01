import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyPageOneComponent } from './dummy-page-one.component';

describe('DummyPageOneComponent', () => {
  let component: DummyPageOneComponent;
  let fixture: ComponentFixture<DummyPageOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DummyPageOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyPageOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
