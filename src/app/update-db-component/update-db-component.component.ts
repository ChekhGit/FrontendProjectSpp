import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Country } from '../models/countries';
import { League } from '../models/league';
import { Coach } from '../models/coach';
import { Team } from '../models/team';
import { Player } from '../models/player';
import { DataService } from '../data.service';
import { DocumentService } from '../document.service';
import { MatDialog } from '@angular/material';
import { AddCountryComponentComponent } from '../add-country-component/add-country-component.component';

@Component({
  selector: 'app-update-db-component',
  templateUrl: './update-db-component.component.html',
  providers: [DataService, DocumentService, MatDialog],
  styleUrls: ['./update-db-component.component.css']
})
export class UpdateDbComponentComponent implements OnInit {
  @ViewChild(AddCountryComponentComponent) noteCanvas: AddCountryComponentComponent;

  observableCoutries: Observable<Country[]>;
  countries: Country[] = [];
  observableLeagues: Observable<League[]>;
  leagues: League[] = [];
  observableTeams: Observable<Team[]>;
  teams: Team[] = [];
  observableCoaches: Observable<Coach[]>;
  coaches: Coach[] = [];
  observablePlayers: Observable<Player[]>;
  players: Player[] = [];

  observableDelete: Observable<boolean>;

  currentTeamId: Number = -1;
  currentCountryId: Number = -1;
  currentLeagueId: Number = -1;
  currentPlayerId: Number = -1;
  currentCoachId: Number = -1;
  constructor(private dataService: DataService, private docService: DocumentService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.getCountryList();
  }
  getCountryList() {
    this.observableCoutries = this.dataService.getCountryName();
    this.observableCoutries.subscribe(
      (countries) => {
        /*for (let i =0; i<countries.length; i++) {
          this.countries[i] = countries[i];
        }*/
        this.countries = countries;
      }
    );
  }
  getLeaguesList(value) {
    this.observableLeagues = this.dataService.getLeagueByCountry(value);
    this.observableLeagues.subscribe(
      (leagues) => this.leagues = leagues
    );
  }
  getTeamsList(value) {
    this.observableTeams = this.dataService.getTeamByLeague(value);
    this.observableTeams.subscribe(
      (teams) => this.teams = teams
    );
  }
  getPlayersList(value) {
    this.observablePlayers = this.dataService.getPlayerByTeam(value);
    this.observablePlayers.subscribe(
      (players) => this.players = players
    );
  }
  getCoachesList(value) {
    this.observableCoaches = this.dataService.getCoachByTeam(value);
    this.observableCoaches.subscribe(
      (coaches) => this.coaches = coaches
    );
  }
  onCountryChange(event) {
    let value = event.target.value;
    this.currentCountryId = value;
    if (value !== '-1') {
      this.observableLeagues = this.dataService.getLeagueByCountry(value);
      this.observableLeagues.subscribe(
        (leagues) => this.leagues = leagues
      );
    }
    this.leagues = [];
    this.teams = [];
    this.coaches = [];
    this.players = [];
    this.coaches = [];
  }
  onLeagueChange(event) {
    let value = event.target.value;
    this.currentLeagueId = value;
    if (value !== '-1') {
      this.observableTeams = this.dataService.getTeamByLeague(value);
      this.observableTeams.subscribe(
        (teams) => this.teams = teams
      );
    }
    this.teams = [];
    this.coaches = [];
    this.players = [];
  }
  onTeamChange(event) {
    let value = event.target.value;
    this.currentTeamId = value;
    if (value !== '-1') {
      this.observablePlayers = this.dataService.getPlayerByTeam(value);
      this.observablePlayers.subscribe(
        (players) => this.players = players
      );
      this.observableCoaches = this.dataService.getCoachByTeam(value);
      this.observableCoaches.subscribe(
        (coaches) => this.coaches = coaches
      );
    }
    this.players = [];
    this.coaches = [];
  }
  onPlayerChange(event) {
    let value = event.target.value;
    this.currentPlayerId = value;
  }
  onCoachChange(event) {
    let value = event.target.value;
    this.currentCoachId = value;
  }
  clearAll() {
    this.countries = [];
    this.getCountryList();
    this.leagues = [];
    this.teams = [];
    this.coaches = [];
    this.players = [];
  }
  generateTeamDoc() {
    if (this.currentTeamId !== -1) {
      var teamObject = this.teams.filter((el) => el.id == this.currentTeamId);
      this.docService.getTeamDocument(this.currentTeamId, teamObject[0]["name"]);
    }
  }
  generateLeagueDoc() {
    if (this.currentLeagueId !== -1) {
      var leagueObject = this.leagues.filter((el) => el.id == this.currentLeagueId);
      this.docService.getLeagueDocument(this.currentLeagueId, leagueObject[0]["name"]);
    }
  }
  generateCountryDoc() {
    if (this.currentCountryId !== -1) {
      var countryObject = this.countries.filter((el) => el.id == this.currentCountryId);
      this.docService.getCountryDocument(this.currentCountryId, countryObject[0]["name"]);
    }
  }
  deleteCountry() {
    if (this.currentCountryId !== -1) {
      this.observableDelete = this.dataService.deleteCountry(this.currentCountryId);
      this.observableDelete.subscribe(
        (result) => {
        this.countries = [];
          this.getCountryList();
          this.currentCountryId = -1;
        }
      );
    } else {
      alert("Select value");
    }
  }
  deleteLeague() {
    if (this.currentLeagueId !== -1) {
      this.observableDelete = this.dataService.deleteLeague(this.currentLeagueId);
      this.observableDelete.subscribe(
        (result) => {
        this.leagues = [];
          this.getLeaguesList(this.currentCountryId);
          this.currentLeagueId = -1;
        }
      );
    } else {
      alert("Select value");
    }
  }
  deleteTeam() {
    if (this.currentTeamId !== -1) {
      this.observableDelete = this.dataService.deleteTeam(this.currentTeamId);
      this.observableDelete.subscribe(
        (result) => {
        this.teams = [];
          this.getTeamsList(this.currentLeagueId);
          this.currentTeamId = -1;
        }
      );
    } else {
      alert("Select value");
    }
  }
  deletePlayer() {
    if (this.currentPlayerId !== -1) {
      this.observableDelete = this.dataService.deletePlayer(this.currentPlayerId);
      this.observableDelete.subscribe(
        (result) => {
        this.players = [];
          this.getPlayersList(this.currentTeamId);
          this.currentPlayerId = -1;
        }
      );
    } else {
      alert("Select value");
    }
  }
  deleteCoach() {
    if (this.currentCoachId !== -1) {
      this.observableDelete = this.dataService.deleteCoach(this.currentCoachId);
      this.observableDelete.subscribe(
        (result) => {
        this.coaches = [];
          this.getCoachesList(this.currentTeamId);
          this.currentCoachId = -1;
        }
      );
    } else {
      alert("Select value");
    }
  }
}
