import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { Pos } from '../models/pos';
import { Player } from '../models/player';
@Component({
  selector: 'app-add-player-component',
  templateUrl: './add-player-component.component.html',
  providers: [DataService],
  styleUrls: ['./add-player-component.component.css']
})
export class AddPlayerComponentComponent implements OnInit {
  @Output() updatePlayers = new EventEmitter<any>();
  @Input() teamId: Number;
  observable: Observable<boolean>;
  observablePos: Observable<Pos[]>;
  positions: Pos[] = [];
  player: Player;
  currentPosId: Number = -1;
  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.observablePos = this.dataService.getPositions();
    this.observablePos.subscribe(
      (positions) => {
        /*for (let i =0; i<countries.length; i++) {
          this.countries[i] = countries[i];
        }*/
        this.positions = positions;
      }
    );
  }
  onPositionChange(event) {
    this.currentPosId = event.target.value;
  }
  addPlayer(name,surname,losts, wins, draws,goals,passes,reds,yellows) {
    var obj = {
      name: name,
      surname:surname,
      idPosition:this.currentPosId,
      lostMatches:losts,
      winMatches:wins,
      drawMatches:draws,
      goals:goals,
      keyPasses:passes,
      redCards:reds,
      yellowCards:yellows,
      idTeam:this.teamId
    }
    this.observable = this.dataService.addPlayer(obj, this.teamId);
    this.observable.subscribe(
      (res) => {
        this.updatePlayers.emit(this.teamId);
      });    
  }
}
