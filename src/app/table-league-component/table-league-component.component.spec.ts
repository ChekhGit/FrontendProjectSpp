import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableLeagueComponentComponent } from './table-league-component.component';

describe('TableLeagueComponentComponent', () => {
  let component: TableLeagueComponentComponent;
  let fixture: ComponentFixture<TableLeagueComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableLeagueComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableLeagueComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
