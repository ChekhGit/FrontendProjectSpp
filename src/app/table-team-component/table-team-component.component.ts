import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-table-team-component',
  templateUrl: './table-team-component.component.html',
  styleUrls: ['./table-team-component.component.css']
})
export class TableTeamComponentComponent implements OnInit {
  @Input() private teams: any[];
  displayedColumns = ['name'];
  dataSource ;

  ngOnInit() {
  }
  ngOnChanges() {
    this.dataSource = new MatTableDataSource(this.teams);
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
