import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Country } from '../models/countries';
import { League } from '../models/league';
import { Team } from '../models/team';
import { Player } from '../models/player';
import { DataService } from '../data.service';
import { ThrowStmt } from '@angular/compiler';
import { TableCountryComponentComponent } from '../table-country-component/table-country-component.component';
import { Coach } from '../models/coach';
import { DocumentService } from '../document.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-control-component',
  templateUrl: './control-component.component.html',
  providers: [DataService, DocumentService,MatDialog],
  styleUrls: ['./control-component.component.css'],
})
export class ControlComponentComponent implements OnInit {
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
  currentTeamId: Number = -1;
  currentCountryId: Number = -1;
  currentLeagueId: Number = -1;
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
  clearAll() {
    this.countries = [];
    this.getCountryList();
    this.leagues = [];
    this.teams = [];
    this.coaches = [];
    this.players = [];
  }
  generateTeamDoc() {

    if (this.currentTeamId != -1){
    var teamObject = this.teams.filter((el)=>el.id == this.currentTeamId);
    this.docService.getTeamDocument(this.currentTeamId, teamObject[0]["name"]);
    }
  }
  generateLeagueDoc() {
    debugger;
    if (this.currentLeagueId != -1) {
    var leagueObject = this.leagues.filter((el)=>el.id == this.currentLeagueId);
    this.docService.getLeagueDocument(this.currentLeagueId, leagueObject[0]["name"]);
    }
  }
  generateCountryDoc() {
    if (this.currentCountryId != -1) {
    var countryObject = this.countries.filter((el)=>el.id == this.currentCountryId);
    this.docService.getCountryDocument(this.currentCountryId, countryObject[0]["name"]);
    }
  }
  
}
