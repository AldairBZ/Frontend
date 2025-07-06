import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-barra-navegacion', // Selector en español
  standalone: true,
  imports: [FormsModule],
  templateUrl: './barra-navegacion.html',
  styleUrl: './barra-navegacion.css'
})
export class BarraNavegacionComponent implements OnInit {
  idioma = 'es';
  textos: any = {};

  ngOnInit() {
    this.cargarTextos();
  }

  async cargarTextos() {
    const res = await fetch(`/src/i18n/${this.idioma}.json`);
    this.textos = await res.json();
  }

  async cambiarIdioma() {
    await this.cargarTextos();
    console.log('Idioma cambiado a:', this.idioma);
  }
}
