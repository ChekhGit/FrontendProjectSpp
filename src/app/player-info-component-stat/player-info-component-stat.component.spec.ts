import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerInfoComponentStatComponent } from './player-info-component-stat.component';

describe('PlayerInfoComponentStatComponent', () => {
  let component: PlayerInfoComponentStatComponent;
  let fixture: ComponentFixture<PlayerInfoComponentStatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerInfoComponentStatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerInfoComponentStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
