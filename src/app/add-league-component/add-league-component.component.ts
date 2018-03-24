import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-add-league-component',
  templateUrl: './add-league-component.component.html',
  providers: [DataService],
  styleUrls: ['./add-league-component.component.css']
})
export class AddLeagueComponentComponent implements OnInit {
  @Output() updateLeagues = new EventEmitter<any>();
  @Input() countryId: Number;
  observable: Observable<boolean>;
  constructor(private dataService: DataService) {
  }

  ngOnInit() {
  }
  addLeague(leagueName) {
    this.observable = this.dataService.addLeague(leagueName, this.countryId);
    this.observable.subscribe(
      (res) => {
        this.updateLeagues.emit(this.countryId);
      });    
  }
}
