import { Component, OnInit, Input } from '@angular/core';
import { Coach } from '../models/coach';

@Component({
  selector: 'app-coach-info-component-stat',
  templateUrl: './coach-info-component-stat.component.html',
  styleUrls: ['./coach-info-component-stat.component.css']
})
export class CoachInfoComponentStatComponent implements OnInit {
  @Input() coach: Coach;
  constructor() { }

  ngOnInit() {
  }

}
