import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';
// import * as cors from "cors";
import { Observable } from 'rxjs/Observable';
import { Country } from './models/countries';
import { League } from './models/league';
import { Team } from './models/team';
import { Player } from './models/player';
import { Coach } from './models/coach';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  public result;

  getCountryName(): Observable<Country[]> {
    return this.http.get('http://localhost:8081/country')
      .map((this.extractCountryData));
  }
  getLeagueByCountry(id): Observable<League[]> {
    return this.http.get('http://localhost:8081/country/' + id + '/league')
      .map(this.extractLeagueData);
  }
  getTeamByLeague(id): Observable<Team[]> {
    return this.http.get('http://localhost:8081/league/' + id + '/team')
      .map(this.extractTeamData);
  }
  getPlayerByTeam(id): Observable<Player[]> {
    return this.http.get('http://localhost:8081/team/' + id + '/player')
      .map(this.extractPlayerData);
  }
  getCoachByTeam(id): Observable<Coach[]> {
    return this.http.get('http://localhost:8081/team/' + id + '/coach')
      .map(this.extractCoachData);
  }
  private extractCountryData(res: Country[]) {
    let body = res;
    return body;
  }
  private extractLeagueData(res: League[]) {
    let body = res;
    return body;
  }
  private extractTeamData(res: Team[]) {
    let body = res;
    return body;
  }
  private extractPlayerData(res: Player[]) {
    let body = res;
    return body;
  }
  private extractCoachData(res: Coach[]) {
    let body = res;
    return body;
  }
}
