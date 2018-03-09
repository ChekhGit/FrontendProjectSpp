import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import { Observable } from 'rxjs/Observable';
import { Country } from '../models/countries';
import { League } from '../models/league';
import { Team } from '../models/team';
import { Player } from '../models/player';

@Component({
  selector: 'app-country-select-component-stat',
  templateUrl: './country-select-component-stat.component.html',
  providers:[DataService],
  styleUrls: ['./country-select-component-stat.component.css']
})
export class CountrySelectComponentStatComponent  implements OnInit   {
  observableCoutries: Observable<Country[]>;
  countries: Country[] = [];
  observableLeagues: Observable<League[]>;
  leagues: League[] = [];
  observableTeams: Observable<Team[]>;
  teams: Team[] = [];
  observablePlayers: Observable<Player[]>;
  players: Player[] = [];
  private initialObject: Player = {
    id:0,
    name:"Name",
    surname:"",
    position:"",
    idStatistic:"",
    lostMatches:"",
    winMatches:"",
    drawMatches:"",
    goals:"",
    keyPasses:"",
    redCards:"",
    yellowCards:""
  };
  currentPlayer: Player = this.initialObject;

  constructor(private dataService: DataService){
  }

  ngOnInit(){  
    this.observableCoutries = this.dataService.getCountryName();
    this.observableCoutries.subscribe(
      (countries) => this.countries = countries
    );
  }
  onCountryChange(event) {
    this.observableLeagues = this.dataService.getLeagueByCountry(event.target.value);
    this.observableLeagues.subscribe(
      (leagues) => this.leagues = leagues
    );
    this.leagues = [];
    this.teams = [];
    this.players = [];
    this.currentPlayer = this.initialObject;
  }
  onLeagueChange(event) {
    this.observableTeams = this.dataService.getTeamByLeague(event.target.value);
    this.observableTeams.subscribe(
      (teams) => this.teams = teams
    );
    this.teams = [];
    this.players = [];
    this.currentPlayer = this.initialObject;
  }
  onTeamChange(event) {
    this.observablePlayers = this.dataService.getPlayerByTeam(event.target.value);
    this.observablePlayers.subscribe(
      (players) => this.players = players
    );
    this.players = [];
    this.currentPlayer = this.initialObject;
  }
  onPlayerChange(event) {
    this.currentPlayer = this.players.filter(el => el.id === event.target.value)[0];
  }

  clearAll() {
    this.leagues = [];
    this.teams = [];
    this.players = [];
    this.currentPlayer = this.initialObject;
  }
}
