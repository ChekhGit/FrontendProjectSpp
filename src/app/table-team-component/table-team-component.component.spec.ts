import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTeamComponentComponent } from './table-team-component.component';

describe('TableTeamComponentComponent', () => {
  let component: TableTeamComponentComponent;
  let fixture: ComponentFixture<TableTeamComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableTeamComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableTeamComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
