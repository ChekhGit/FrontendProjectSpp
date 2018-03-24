import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDbComponentComponent } from './update-db-component.component';

describe('UpdateDbComponentComponent', () => {
  let component: UpdateDbComponentComponent;
  let fixture: ComponentFixture<UpdateDbComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateDbComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDbComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
