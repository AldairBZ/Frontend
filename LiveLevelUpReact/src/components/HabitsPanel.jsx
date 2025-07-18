import React from 'react';

export default function HabitsPanel() {
  return (
    <section className="habits-panel">
      <h2>Hábitos Saludables</h2>
      <div className="habits-botones">
        <button>😴 Dormir 8h</button>
        <button>🏃 Caminar 30min</button>
        <button>🥦 Comer verduras</button>
        <button>🚭 Dejar de fumar</button>
        <button>💧 Hidratarse</button>
        <button>🌍 Apagar el coche y caminar</button>
      </div>
    </section>
  );
} 