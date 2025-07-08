import React from 'react';
import BarraNavegacion from './BarraNavegacion';
import './Inicio.css';

export default function Inicio({ idioma, setIdioma }) {
  return (
    <>
      <BarraNavegacion idioma={idioma} setIdioma={setIdioma} />
      <main className="contenido-inicio">
        <h1>¡Bienvenido a LiveLevelUp!</h1>
        <p>Aquí irá el contenido principal del home.</p>
      </main>
    </>
  );
} 