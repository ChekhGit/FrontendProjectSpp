import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLeagueComponentComponent } from './add-league-component.component';

describe('AddLeagueComponentComponent', () => {
  let component: AddLeagueComponentComponent;
  let fixture: ComponentFixture<AddLeagueComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLeagueComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLeagueComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
