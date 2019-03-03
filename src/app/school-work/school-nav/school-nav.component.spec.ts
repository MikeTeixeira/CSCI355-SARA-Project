import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolNavComponent } from './school-nav.component';

describe('SchoolNavComponent', () => {
  let component: SchoolNavComponent;
  let fixture: ComponentFixture<SchoolNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
