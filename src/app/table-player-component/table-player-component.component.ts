import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-table-player-component',
  templateUrl: './table-player-component.component.html',
  styleUrls: ['./table-player-component.component.css']
})
export class TablePlayerComponentComponent implements OnInit {

  @Input() private players: any[];
  displayedColumns = ['name', 'surname', 'position', 'lost', 'wins', 'draws', 'goals', 'passes', 'red', 'yellow'];
  dataSource ;

  ngOnInit() {
  }
  ngOnChanges() {
    this.dataSource = new MatTableDataSource(this.players);
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
