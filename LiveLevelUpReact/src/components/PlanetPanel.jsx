import React from 'react';

export default function PlanetPanel() {
  return (
    <section className="planet-panel">
      <h2>Estado del Planeta</h2>
      <div className="planet-bars">
        <div>Aire: <progress value="70" max="100"></progress></div>
        <div>Agua: <progress value="80" max="100"></progress></div>
        <div>Biodiversidad: <progress value="60" max="100"></progress></div>
        <div>CO2: <progress value="40" max="100"></progress></div>
      </div>
      <div className="simulador-colectivo">
        <h3>Simulador colectivo</h3>
        <p>¿Qué pasa si 100 o 1.000 personas hacen lo mismo?</p>
        {/* Aquí irá la simulación */}
      </div>
    </section>
  );
} 