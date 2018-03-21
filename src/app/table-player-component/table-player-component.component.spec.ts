import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePlayerComponentComponent } from './table-player-component.component';

describe('TablePlayerComponentComponent', () => {
  let component: TablePlayerComponentComponent;
  let fixture: ComponentFixture<TablePlayerComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablePlayerComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePlayerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
