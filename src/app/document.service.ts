import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Conversion } from './models/fileConversion';
import { Observable } from 'rxjs/Observable';
import {RequestOptions, ResponseContentType, Http } from '@angular/http'
import {saveAs as importedSaveAs} from "file-saver";
import 'rxjs/Rx';
import { HttpResponse } from 'selenium-webdriver/http';
@Injectable()
export class DocumentService {

  constructor(private http: HttpClient) { }

  status: string = "";
  private infoName: string = "";
  getPlayerDocument(id, infoName){
    this.infoName = infoName;
    this.http.get('http://localhost:8081/document/player/' + id + '/report').subscribe(
      data => this.checkStatus(id));
  }
  private checkStatus(id) {
    let observ = this.http.get('http://localhost:8081/document/' + id + '/check').
        map(this.getStatus);
        observ.subscribe(
          (data) => {
            if (data['status'] === 'Creating') {
              this.checkStatus(id);
            } else {
              this.downloadFile(id);
            }
          }
        );
  }
  downloadFile(id){
    this.http.get('http://localhost:8081/document/' + id + '/download', {responseType:"blob"})
   .subscribe(data=>{
      var url = window.URL.createObjectURL(data);
      var anchor = document.createElement("a");
      anchor.download = this.infoName + ".docx";
      anchor.href = url;
      anchor.click();
   });
}
  private getStatus(res: Conversion) {
    let body = res.status;
    return body;
  }
}
