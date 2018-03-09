import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsComponentStatisticComponent } from './tabs-component-statistic.component';

describe('TabsComponentStatisticComponent', () => {
  let component: TabsComponentStatisticComponent;
  let fixture: ComponentFixture<TabsComponentStatisticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsComponentStatisticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsComponentStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
