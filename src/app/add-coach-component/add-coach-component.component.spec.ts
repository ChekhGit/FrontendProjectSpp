import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCoachComponentComponent } from './add-coach-component.component';

describe('AddCoachComponentComponent', () => {
  let component: AddCoachComponentComponent;
  let fixture: ComponentFixture<AddCoachComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCoachComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCoachComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
