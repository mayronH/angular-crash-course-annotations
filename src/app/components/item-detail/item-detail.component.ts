import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animal } from 'src/app/interfaces/Animal';
import { ListRenderService } from 'src/app/services/list-render.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css'],
})
export class ItemDetailComponent implements OnInit {
  animal?: Animal;

  constructor(
    private listRenderService: ListRenderService,
    private route: ActivatedRoute
  ) {
    this.getAnimal();
  }

  getAnimal() {
    // get the id from the route param
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.listRenderService
      .getItem(id)
      .subscribe((animal) => (this.animal = animal));
  }

  ngOnInit(): void {}
}
