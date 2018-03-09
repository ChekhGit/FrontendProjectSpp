import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../models/player';

@Component({
  selector: 'app-player-info-component-stat',
  templateUrl: './player-info-component-stat.component.html',
  styleUrls: ['./player-info-component-stat.component.css']
})
export class PlayerInfoComponentStatComponent implements OnInit {
  @Input() player: Player;
  constructor() { }

  ngOnInit() {
  }

}
