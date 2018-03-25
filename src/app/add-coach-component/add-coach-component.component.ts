import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { Coach } from '../models/coach';

@Component({
  selector: 'app-add-coach-component',
  templateUrl: './add-coach-component.component.html',
  styleUrls: ['./add-coach-component.component.css']
})
export class AddCoachComponentComponent implements OnInit {
  @Output() updateCoaches = new EventEmitter<any>();
  @Input() teamId: Number;
  observable: Observable<boolean>;
  coach: Coach;
  currentPosId: Number = -1;
  constructor(private dataService: DataService) {
  }

  ngOnInit() {
   
  }
  addCoach(name,surname,losts, wins, draws,years,titles) {
    var obj = {
      name: name,
      surname:surname,
      lostMatches:losts,
      winMatches:wins,
      drawMatches:draws,
      yearsOld:years,
      titles:titles,
      idTeam:this.teamId
    }
    this.observable = this.dataService.addCoach(obj, this.teamId);
    this.observable.subscribe(
      (res) => {
        this.updateCoaches.emit(this.teamId);
      });    
  }
}
