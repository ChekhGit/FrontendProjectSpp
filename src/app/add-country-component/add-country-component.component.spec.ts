import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCountryComponentComponent } from './add-country-component.component';

describe('AddCountryComponentComponent', () => {
  let component: AddCountryComponentComponent;
  let fixture: ComponentFixture<AddCountryComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCountryComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCountryComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
