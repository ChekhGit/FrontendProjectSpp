import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { Country } from '../models/countries';
import { League } from '../models/league';
import { Team } from '../models/team';
import { Player } from '../models/player';
import { DocumentService } from '../document.service';

@Component({
  selector: 'app-country-select-component-stat',
  templateUrl: './country-select-component-stat.component.html',
  providers: [DataService, DocumentService],
  styleUrls: ['./country-select-component-stat.component.css']
})
export class CountrySelectComponentStatComponent implements OnInit {
  observableCoutries: Observable<Country[]>;
  countries: Country[] = [];
  observableLeagues: Observable<League[]>;
  leagues: League[] = [];
  observableTeams: Observable<Team[]>;
  teams: Team[] = [];
  observablePlayers: Observable<Player[]>;
  players: Player[] = [];
  private initialObject: Player = {
    id: 0,
    name: "Name",
    surname: "",
    position: "",
    idStatistic: "",
    lostMatches: "",
    winMatches: "",
    drawMatches: "",
    goals: "",
    keyPasses: "",
    redCards: "",
    yellowCards: ""
  };
  currentPlayer: Player = this.initialObject;

  constructor(private dataService: DataService, private docService: DocumentService) {
  }

  ngOnInit() {
    this.observableCoutries = this.dataService.getCountryName();
    this.observableCoutries.subscribe(
      (countries) => this.countries = countries
    );
  }
  onCountryChange(event) {
    let value = event.target.value;
    if (value !== '-1') {
      this.observableLeagues = this.dataService.getLeagueByCountry(value);
      this.observableLeagues.subscribe(
        (leagues) => this.leagues = leagues
      );
    }
    this.leagues = [];
    this.teams = [];
    this.players = [];
    this.currentPlayer = this.initialObject;
  }
  onLeagueChange(event) {
    let value = event.target.value;
    if (value !== '-1') {
      this.observableTeams = this.dataService.getTeamByLeague(value);
      this.observableTeams.subscribe(
        (teams) => this.teams = teams
      );
    }
    this.teams = [];
    this.players = [];
    this.currentPlayer = this.initialObject;
  }
  onTeamChange(event) {
    let value = event.target.value;
    if (value !== '-1') {
      this.observablePlayers = this.dataService.getPlayerByTeam(value);
      this.observablePlayers.subscribe(
        (players) => this.players = players
      );
    }
    this.players = [];
    this.currentPlayer = this.initialObject;
  }
  onPlayerChange(event) {
    let value = event.target.value;
    if (value !== '-1') {
      this.currentPlayer = this.players.filter(el => el.id === value)[0];
    } else {
      this.currentPlayer = this.initialObject;
    }
  }

  clearAll() {
    this.leagues = [];
    this.teams = [];
    this.players = [];
    this.currentPlayer = this.initialObject;
  }

  generateDoc() {
    this.docService.getPlayerDocument(this.currentPlayer.id, this.currentPlayer.name + this.currentPlayer.surname);
  }
}
