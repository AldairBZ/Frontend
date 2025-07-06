import { Component } from '@angular/core';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [BarraNavegacionComponent],
  templateUrl: './inicio.html',
  styleUrls: ['./inicio.css']
})
export class InicioComponent {
  idioma = 'es';
  cambiarIdioma() {
    // Aquí puedes implementar la lógica para cambiar el idioma globalmente
    console.log('Idioma cambiado a:', this.idioma);
  }
}
