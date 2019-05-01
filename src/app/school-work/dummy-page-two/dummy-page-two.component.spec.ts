import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyPageTwoComponent } from './dummy-page-two.component';

describe('DummyPageTwoComponent', () => {
  let component: DummyPageTwoComponent;
  let fixture: ComponentFixture<DummyPageTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DummyPageTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyPageTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
