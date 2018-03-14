import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Country } from '../models/countries';
import { League } from '../models/league';
import { Team } from '../models/team';
import { Player } from '../models/player';
import { DataService } from '../data.service';

@Component({
  selector: 'app-control-component',
  templateUrl: './control-component.component.html',
  providers: [DataService],
  styleUrls: ['./control-component.component.css']
})
export class ControlComponentComponent implements OnInit {
  observableCoutries: Observable<Country[]>;
  countries: Country[] = [];
  observableLeagues: Observable<League[]>;
  leagues: League[] = [];
  observableTeams: Observable<Team[]>;
  teams: Team[] = [];
  observablePlayers: Observable<Player[]>;
  players: Player[] = [];
  
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getCountryList();
  }
  getCountryList() {
    this.observableCoutries = this.dataService.getCountryName();
    this.observableCoutries.subscribe(
      (countries) => this.countries = countries
    );
  }

}
