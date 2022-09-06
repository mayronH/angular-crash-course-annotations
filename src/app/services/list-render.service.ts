import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from '../interfaces/Animal';

@Injectable({
  providedIn: 'root',
})
export class ListRenderService {
  constructor(private http: HttpClient) {}

  private apiUrl = 'http://localhost:3000/animals';

  // visual changes, without data should be on components
  // services is for requests/API/etc
  remove(animals: Animal[], animalToDelete: Animal) {
    animals = animals.filter((animal) => {
      if (animal === animalToDelete) return;
      return animal;
    });
    return animals;
  }

  removeHttp(id: number) {
    return this.http.delete<Animal>(`${this.apiUrl}/${id}`);
  }

  // HTTP request
  getList(): Observable<Array<Animal>> {
    return this.http.get<Array<Animal>>(this.apiUrl);
  }

  getItem(id: number): Observable<Animal> {
    return this.http.get<Animal>(`${this.apiUrl}/${id}`);
  }
}
