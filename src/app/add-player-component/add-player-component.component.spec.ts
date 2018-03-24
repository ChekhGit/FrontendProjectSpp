import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlayerComponentComponent } from './add-player-component.component';

describe('AddPlayerComponentComponent', () => {
  let component: AddPlayerComponentComponent;
  let fixture: ComponentFixture<AddPlayerComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPlayerComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPlayerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
