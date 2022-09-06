import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {
  showP: boolean = true;

  showMessage(): void {
    this.showP = !this.showP;
  }

  constructor() {}

  ngOnInit(): void {}
}
