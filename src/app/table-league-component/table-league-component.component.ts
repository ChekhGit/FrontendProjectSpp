import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-table-league-component',
  templateUrl: './table-league-component.component.html',
  styleUrls: ['./table-league-component.component.css']
})
export class TableLeagueComponentComponent implements OnInit {
  @Input() private leagues: any[];
  displayedColumns = ['name'];
  dataSource ;

  ngOnInit() {
  }
  ngOnChanges() {
    this.dataSource = new MatTableDataSource(this.leagues);
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
