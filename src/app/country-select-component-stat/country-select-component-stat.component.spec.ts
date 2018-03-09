import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrySelectComponentStatComponent } from './country-select-component-stat.component';

describe('CountrySelectComponentStatComponent', () => {
  let component: CountrySelectComponentStatComponent;
  let fixture: ComponentFixture<CountrySelectComponentStatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountrySelectComponentStatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountrySelectComponentStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
