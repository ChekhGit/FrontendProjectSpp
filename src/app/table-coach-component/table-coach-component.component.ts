import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-table-coach-component',
  templateUrl: './table-coach-component.component.html',
  styleUrls: ['./table-coach-component.component.css']
})
export class TableCoachComponentComponent implements OnInit {
  
  @Input() private coaches: any[];
  displayedColumns = ['name', 'surname', 'years', 'titles', 'lost', 'wins', 'draws'];
  dataSource ;

  ngOnInit() {
  }
  ngOnChanges() {
    this.dataSource = new MatTableDataSource(this.coaches);
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
