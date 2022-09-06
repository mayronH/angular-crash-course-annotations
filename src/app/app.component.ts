import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userName = 'Anakin';

  userData = {
    email: 'joaquim@teste.com',
    role: 'admin',
  };

  title = 'teste';
}
