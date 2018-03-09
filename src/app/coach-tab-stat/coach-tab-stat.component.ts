import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import { Country } from '../models/countries';
import { Observable } from 'rxjs/Observable';
import { League } from '../models/league';
import { Team } from '../models/team';
import { Player } from '../models/player';
import { Coach } from '../models/coach';

@Component({
  selector: 'app-coach-tab-stat',
  templateUrl: './coach-tab-stat.component.html',
  providers:[DataService],
  styleUrls: ['./coach-tab-stat.component.css']
})
export class CoachTabStatComponent implements OnInit {
  powers = ['Really Smart', 'Super Flexible',
  'Super Hot', 'Weather Changer'];
  selects = [
    {
    label:'Country',
    items:[]
  },
  {
    label:'League',
    items:[{id:0,name:"APL"},{id:1,name:"AAAA"}]
  },
  {
    label:'Team',
    items:[{id:0,name:"123qedw"},{id:1,name:"2143534"}]
  },
  {
    label:'Player',
    items:[{id:0,name:"////////"},{id:1,name:"+++++++++"}]
  }];

  selectedValues = [];

  observableCoutries: Observable<Country[]>;
  countries: Country[] = [];
  observableLeagues: Observable<League[]>;
  leagues: League[] = [];
  observableTeams: Observable<Team[]>;
  teams: Team[] = [];
  observableCoaches: Observable<Coach[]>;
  coaches: Coach[] = [];
  private initialObject: Coach = {
    id:0,
    name:"Name",
    surname:"",
    idStatistic:"",
    lostMatches:"",
    winMatches:"",
    drawMatches:"",
    titles:"",
    yearsOld:""
  };
  currentCoach: Coach = this.initialObject;

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
    this.coaches = [];
    this.currentCoach = this.initialObject;
  }
  onLeagueChange(event) {
    this.observableTeams = this.dataService.getTeamByLeague(event.target.value);
    this.observableTeams.subscribe(
      (teams) => this.teams = teams
    );
    this.teams = [];
    this.coaches = [];
    this.currentCoach = this.initialObject;
  }
  onTeamChange(event) {
    this.observableCoaches = this.dataService.getCoachByTeam(event.target.value);
    this.observableCoaches.subscribe(
      (coaches) => this.coaches = coaches
    );
    this.coaches = [];
    this.currentCoach = this.initialObject;
  }
  onCoachChange(event) {
    this.currentCoach = this.coaches.filter(el => el.id === event.target.value)[0];
  }
  onChange(event) {
    let selectedValue = event.target.value;
    let selectedType = event.target.getAttribute('id').toLowerCase();
    let prior;
    console.log(selectedType);
    switch (selectedType) {
      case "country": prior = 0; break;
      case "league": prior = 1; break;
      case "team": prior = 2; break;
      default: prior = 3; break;
    }
    this.selectedValues = this.selectedValues.filter((el)=>el.priority < prior);
    this.selectedValues.push({type:selectedType,id:selectedValue,priority:prior});
    console.log(this.selectedValues);
  }
  clearAll() {
    this.leagues = [];
    this.teams = [];
    this.coaches = [];
    this.currentCoach = this.initialObject;
  }
}
