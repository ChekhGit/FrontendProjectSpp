import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ControlComponentComponent } from '../control-component/control-component.component';
@Component({
  selector: 'app-add-country-dialog-component',
  templateUrl: './add-country-dialog-component.component.html',
  styleUrls: ['./add-country-dialog-component.component.css']
})
export class AddCountryDialogComponentComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ControlComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
