import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mail } from './models/mail';

@Injectable()
export class MailService {

  constructor(private http: HttpClient) { }

  sendEmaile(id, em) {
    this.http.post('http://localhost:8081//player/' + id + '/mailto', {email: em}).
    subscribe((data)=>{ alert("Completed!")})
  }

  subscribeTo(idTeam, email) {
    this.http.post('http://localhost:8081//team/' + idTeam + '/distribution', {email: email}).
    subscribe((data)=>{ alert("Completed!")})
  }

  isValidEmail(email) {
    let filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return filter.test(email);
  }
}
