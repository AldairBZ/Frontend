import React, { useEffect, useRef, useState } from 'react';
import './PantallaBienvenida.css';

export default function PantallaBienvenida({ onComenzar }) {
  const [textos, setTextos] = useState({});
  const canvasRef = useRef(null);

  useEffect(() => {
    fetch('/src/i18n/es.json')
      .then(res => res.json())
      .then(setTextos);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    const estrellas = Array.from({length: 120}, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.5 + 0.5,
      alpha: Math.random()
    }));
    const naves = Array.from({length: 3}, () => ({
      x: Math.random() * width,
      y: Math.random() * height * 0.5,
      vx: 1 + Math.random() * 1.5,
      vy: 0.2 + Math.random() * 0.3
    }));
    function dibujar() {
      ctx.clearRect(0, 0, width, height);
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
        estrella.alpha += (Math.random() - 0.5) * 0.05;
        estrella.alpha = Math.max(0.2, Math.min(estrella.alpha, 1));
      }
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
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fondo-espacio">
      <canvas id="canvas-espacio" ref={canvasRef}></canvas>
      <section className="planeta-container">
        <img src="/src/assets/planeta-pixelart.png" alt="Planeta Pixel Art" className="planeta-pixelart" />
        <button className="empezar-ahora" onClick={onComenzar}>
          {textos.boton_comenzar || 'Comenzar'}
        </button>
      </section>
    </div>
  );
} 