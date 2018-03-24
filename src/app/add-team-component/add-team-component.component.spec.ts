import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTeamComponentComponent } from './add-team-component.component';

describe('AddTeamComponentComponent', () => {
  let component: AddTeamComponentComponent;
  let fixture: ComponentFixture<AddTeamComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTeamComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTeamComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
