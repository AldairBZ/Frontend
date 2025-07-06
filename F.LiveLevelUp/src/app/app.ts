import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PantallaBienvenidaComponent } from './componentes/pantalla-bienvenida';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PantallaBienvenidaComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'F.LiveLevelUp';
}
