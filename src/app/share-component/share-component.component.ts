import { Component, OnInit, Input } from '@angular/core';
import { MailService } from '../mail.service';
import { Player } from '../models/player';

@Component({
  selector: 'app-share-component',
  providers: [MailService],
  templateUrl: './share-component.component.html',
  styleUrls: ['./share-component.component.css']
})
export class ShareComponentComponent implements OnInit {
  @Input() player: Player;
  isCorrectEmail = true;
  constructor(private mailService: MailService) { }

  ngOnInit() {
  }
  sendMessage(email) {
    if (this.mailService.isValidEmail(email)) {
      this.isCorrectEmail = true;
      this.mailService.sendEmaile(this.player.id, email);
    } else {
      this.isCorrectEmail = false;
    }
  }
}
