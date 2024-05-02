import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardVisiteComponent } from './card-visite/card-visite.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardVisiteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hello Teams';

  count = 0;

  increment() {
    this.count++;
  }
}
