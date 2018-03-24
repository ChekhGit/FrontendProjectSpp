import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-add-team-component',
  templateUrl: './add-team-component.component.html',
  providers: [DataService],
  styleUrls: ['./add-team-component.component.css']
})
export class AddTeamComponentComponent implements OnInit {
  @Output() updateTeams = new EventEmitter<any>();
  @Input() leagueId: Number;
  observable: Observable<boolean>;
  constructor(private dataService: DataService) {
  }

  ngOnInit() {
  }
  addTeam(leagueName) {
    this.observable = this.dataService.addTeam(leagueName, this.leagueId);
    this.observable.subscribe(
      (res) => {
        this.updateTeams.emit(this.leagueId);
      });    
  }
}
