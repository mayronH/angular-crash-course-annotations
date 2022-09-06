import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
})
export class PipesComponent implements OnInit {
  randomText: string = 'UPPERCASE TEXT TO TEST PIPE OPERATOR';
  newDate: Date = new Date();

  constructor() {}

  ngOnInit(): void {}
}
