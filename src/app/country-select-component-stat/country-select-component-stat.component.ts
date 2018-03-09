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
  observablePlayers: Observable<Player[]>;
  players: Player[] = [];
  currentPlayer: Player = {
    id:0,
    name:"",
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
    this.currentPlayer = {
      id:0,
      name:"",
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
  }
  onLeagueChange(event) {
    this.observableTeams = this.dataService.getTeamByLeague(event.target.value);
    this.observableTeams.subscribe(
      (teams) => this.teams = teams
    );
    this.teams = [];
    this.players = [];
    this.currentPlayer = {
      id:0,
      name:"",
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
  }
  onTeamChange(event) {
    this.observablePlayers = this.dataService.getPlayerByTeam(event.target.value);
    this.observablePlayers.subscribe(
      (players) => this.players = players
    );
    this.players = [];
    this.currentPlayer = {
      id:0,
      name:"",
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
  }
  onPlayerChange(event) {
    this.currentPlayer = this.players.filter(el => el.id === event.target.value)[0];
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
    this.teams = [];
    this.players = [];
    this.currentPlayer = {
      id:0,
      name:"",
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
  }
  getStat(){
    if (!this.selectedValues.length) {
      alert("Please, set value in all select boxes!");
    } else {
      
    }
  }
  getCountryName(){
    //this.selects[0].items = this.dataService.getCountryName();
  }
}
