import { Component, OnInit, ViewChild, Input } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { DataService } from '../data.service';
import { Country } from '../models/countries';
import { Observable } from 'rxjs/Observable';
import {SelectionModel} from '@angular/cdk/collections';

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
  selection = new SelectionModel<any>(true, []);
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
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }
}