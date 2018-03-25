import { Component, OnInit, Output } from '@angular/core';
import { DataService } from '../data.service';
import { EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-add-country-component',
  templateUrl: './add-country-component.component.html',
  providers: [DataService],
  styleUrls: ['./add-country-component.component.css']
})
export class AddCountryComponentComponent implements OnInit {
  @Output() updateCountries = new EventEmitter<string>();
  observable: Observable<boolean>;
  name: string = '';
  constructor(private dataService: DataService) {
  }

  ngOnInit() {
  }
  addCountry(countryName) {
    if (countryName == '') {
      alert("Field is empty!");
        return;
    }
    this.observable = this.dataService.addCountry(countryName);
    this.observable.subscribe(
      (res) => {
        this.updateCountries.emit();
        this.name = ""
      });
  }
}
