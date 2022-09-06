import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-change-number',
  templateUrl: './change-number.component.html',
  styleUrls: ['./change-number.component.css'],
})
export class ChangeNumberComponent implements OnInit {
  @Output() changeNumber: EventEmitter<void> = new EventEmitter();

  handleClick(): void {
    // emit the event from a child to the parent
    this.changeNumber.emit();
  }

  constructor() {}

  ngOnInit(): void {}
}
