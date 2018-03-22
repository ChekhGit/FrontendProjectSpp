import { Component, OnInit, Input } from '@angular/core';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-subscribe-component',
  providers: [MailService],
  templateUrl: './subscribe-component.component.html',
  styleUrls: ['./subscribe-component.component.css']
})
export class SubscribeComponentComponent implements OnInit {
  @Input() currentTeamId: Number = -1;
  isCorrectEmail = true;
  constructor(private mailService: MailService) { }

  ngOnInit() {
  }

  subscribe(email) {
    if (this.mailService.isValidEmail(email)) {
      this.isCorrectEmail = true;
      this.mailService.subscribeTo(this.currentTeamId, email);
    } else {
      this.isCorrectEmail = false;
    }
  }
}
