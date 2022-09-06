import { Component, OnInit, Input, NgModule } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css'],
})
export class ParentComponentComponent implements OnInit {
  @Input() name: string = '';
  // "!"" means that the object will never be null or undefined
  @Input() userData!: { email: string; role: string };

  constructor() {}

  ngOnInit(): void {}
}
