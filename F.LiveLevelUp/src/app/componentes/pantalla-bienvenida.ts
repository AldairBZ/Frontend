import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pantalla-bienvenida',
  standalone: true,
  templateUrl: './pantalla-bienvenida.html',
  styleUrls: ['./pantalla-bienvenida.css']
})
export class PantallaBienvenidaComponent implements OnInit, AfterViewInit {
  idioma = 'es';
  textos: any = {};

  constructor(private router: Router) {}

  ngOnInit() {
    this.cargarTextos();
  }

  ngAfterViewInit() {
    this.animarFondo();
  }

  async cargarTextos() {
    const res = await fetch(`/src/i18n/${this.idioma}.json`);
    this.textos = await res.json();
  }

  irAInicio() {
    this.router.navigate(['/inicio']);
  }

  animarFondo() {
    const canvas = document.getElementById('canvas-espacio') as HTMLCanvasElement;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Estrellas
    const estrellas = Array.from({length: 120}, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.5 + 0.5,
      alpha: Math.random()
    }));

    // Naves
    const naves = Array.from({length: 3}, () => ({
      x: Math.random() * width,
      y: Math.random() * height * 0.5,
      vx: 1 + Math.random() * 1.5,
      vy: 0.2 + Math.random() * 0.3
    }));

    function dibujar() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      // Estrellas
      for (const estrella of estrellas) {
        ctx.save();
        ctx.globalAlpha = estrella.alpha;
        ctx.beginPath();
        ctx.arc(estrella.x, estrella.y, estrella.r, 0, 2 * Math.PI);
        ctx.fillStyle = '#fff';
        ctx.shadowColor = '#fff';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.restore();
        // Parpadeo
        estrella.alpha += (Math.random() - 0.5) * 0.05;
        estrella.alpha = Math.max(0.2, Math.min(estrella.alpha, 1));
      }
      // Naves
      for (const nave of naves) {
        ctx.save();
        ctx.translate(nave.x, nave.y);
        ctx.rotate(-0.2);
        ctx.fillStyle = '#ffeb3b';
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(18, 4);
        ctx.lineTo(0, 8);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
        nave.x += nave.vx;
        nave.y += nave.vy;
        if (nave.x > width + 20) {
          nave.x = -20;
          nave.y = Math.random() * height * 0.5;
        }
      }
      requestAnimationFrame(dibujar);
    }
    dibujar();
    // Redimensionar canvas al cambiar tamaño ventana
    window.addEventListener('resize', () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    });
  }
} 