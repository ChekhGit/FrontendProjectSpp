import { Component, OnInit, ViewChild, Input } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { DataService } from '../data.service';
import { Country } from '../models/countries';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-table-country-component',
  templateUrl: './table-country-component.component.html',
  providers: [DataService],
  styleUrls: ['./table-country-component.component.css']
})
export class TableCountryComponentComponent implements OnInit {
  @Input() private countries: any[];
  displayedColumns = ['name'];
  dataSource ;

  ngOnInit() {
  }
  ngOnChanges() {
    this.dataSource = new MatTableDataSource(this.countries);
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}