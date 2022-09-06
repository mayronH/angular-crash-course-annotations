import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/interfaces/Animal';

import { ListRenderService } from 'src/app/services/list-render.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent implements OnInit {
  // using services
  constructor(private listRenderService: ListRenderService) {
    this.getAnimals();
  }

  animals: Array<Animal> = [];

  animalDetails = '';

  getAnimals() {
    // with Observable we need to subscribe to get the response
    this.listRenderService
      .getList()
      .subscribe((animals) => (this.animals = animals));
  }

  showAge(animal: Animal) {
    this.animalDetails = `The ${animal.name} has ${animal.age} years`;
  }

  removeAnimal(animalToDelete: Animal) {
    // listRenderService declare on constructor
    // this.animals = this.listRenderService.remove(this.animals, animalToDelete);

    this.animals = this.animals.filter((animal) => {
      if (animal === animalToDelete) return;
      return animal;
    });

    this.listRenderService.removeHttp(animalToDelete.id).subscribe();
  }

  ngOnInit(): void {}
}
