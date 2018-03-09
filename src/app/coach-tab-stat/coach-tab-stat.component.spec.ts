import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachTabStatComponent } from './coach-tab-stat.component';

describe('CoachTabStatComponent', () => {
  let component: CoachTabStatComponent;
  let fixture: ComponentFixture<CoachTabStatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachTabStatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachTabStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
