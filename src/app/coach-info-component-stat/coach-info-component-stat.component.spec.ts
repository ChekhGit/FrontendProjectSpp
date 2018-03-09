import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachInfoComponentStatComponent } from './coach-info-component-stat.component';

describe('CoachInfoComponentStatComponent', () => {
  let component: CoachInfoComponentStatComponent;
  let fixture: ComponentFixture<CoachInfoComponentStatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachInfoComponentStatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachInfoComponentStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
