import React, { useState } from 'react';

export default function Mundo() {
  const [aire] = useState('');
  const [agua] = useState('');
  const [biodiversidad] = useState('');
  const [co2] = useState('');

  return (
    <div className="p-8">
      <h2 className="text-3xl">Estado del Mundo</h2>
      <section className="mt-6 grid grid-cols-2 gap-4">
        <div className="panel">🌬️ Aire: {aire}</div>
        <div className="panel">💧 Agua: {agua}</div>
        <div className="panel">🌳 Biodiversidad: {biodiversidad}</div>
        <div className="panel">🔥 CO2: {co2}</div>
      </section>
      <button className="btn mt-6">Simular impacto de tus acciones</button>
    </div>
  );
} 