import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCoachComponentComponent } from './table-coach-component.component';

describe('TableCoachComponentComponent', () => {
  let component: TableCoachComponentComponent;
  let fixture: ComponentFixture<TableCoachComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableCoachComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCoachComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
