import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Country } from '../models/countries';
import { Observable } from 'rxjs/Observable';
import { League } from '../models/league';
import { Team } from '../models/team';
import { Player } from '../models/player';
import { Coach } from '../models/coach';
import { DocumentService } from '../document.service';

@Component({
  selector: 'app-coach-tab-stat',
  templateUrl: './coach-tab-stat.component.html',
  providers: [DataService, DocumentService],
  styleUrls: ['./coach-tab-stat.component.css']
})
export class CoachTabStatComponent implements OnInit {
  observableCoutries: Observable<Country[]>;
  countries: Country[] = [];
  observableLeagues: Observable<League[]>;
  leagues: League[] = [];
  observableTeams: Observable<Team[]>;
  teams: Team[] = [];
  observableCoaches: Observable<Coach[]>;
  coaches: Coach[] = [];
  private initialObject: Coach = {
    id: 0,
    name: "Name",
    surname: "",
    idStatistic: "",
    lostMatches: "",
    winMatches: "",
    drawMatches: "",
    titles: "",
    yearsOld: ""
  };
  currentCoach: Coach = this.initialObject;

  constructor(private dataService: DataService, private docService: DocumentService) {
  }

  ngOnInit() {
    this.getCountryList();
  }
  getCountryList() {
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
    this.coaches = [];
    this.currentCoach = this.initialObject;
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
    this.coaches = [];
    this.currentCoach = this.initialObject;
  }
  onTeamChange(event) {
    let value = event.target.value;
    if (value !== '-1') {
      this.observableCoaches = this.dataService.getCoachByTeam(value);
      this.observableCoaches.subscribe(
        (coaches) => this.coaches = coaches
      );
    }
    this.coaches = [];
    this.currentCoach = this.initialObject;
  }
  onCoachChange(event) {
    let value = event.target.value;
    if (value !== '-1') {
      this.currentCoach = this.coaches.filter(el => el.id === value)[0];
    } else {
      this.currentCoach = this.initialObject;
    }
  }
  clearAll() {
    this.countries = [];
    this.getCountryList();
    this.leagues = [];
    this.teams = [];
    this.coaches = [];
    this.currentCoach = this.initialObject;
  }

  generateDoc() {
    this.docService.getCoachDocument(this.currentCoach.id, this.currentCoach.name + this.currentCoach.surname);
  }
}
