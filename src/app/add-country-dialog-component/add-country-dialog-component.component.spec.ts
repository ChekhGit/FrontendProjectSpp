import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCountryDialogComponentComponent } from './add-country-dialog-component.component';

describe('AddCountryDialogComponentComponent', () => {
  let component: AddCountryDialogComponentComponent;
  let fixture: ComponentFixture<AddCountryDialogComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCountryDialogComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCountryDialogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
