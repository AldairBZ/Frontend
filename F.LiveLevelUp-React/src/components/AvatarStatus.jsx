import React, { useState } from 'react';
import AvatarMinimal from './AvatarMinimal';

export default function AvatarStatus() {
  const [altura, setAltura] = useState(170);
  const [peso, setPeso] = useState(70);
  const [edad, setEdad] = useState(25);
  const [energia, setEnergia] = useState(80);
  const [animo, setAnimo] = useState('feliz');

  return (
    <section className="avatar-status">
      <AvatarMinimal altura={altura} peso={peso} edad={edad} energia={energia} animo={animo} />
      <div className="avatar-sliders">
        <label>Altura: {altura} cm
          <input type="range" min="120" max="200" value={altura} onChange={e => setAltura(Number(e.target.value))} />
        </label>
        <label>Peso: {peso} kg
          <input type="range" min="40" max="120" value={peso} onChange={e => setPeso(Number(e.target.value))} />
        </label>
        <label>Edad: {edad} años
          <input type="range" min="5" max="100" value={edad} onChange={e => setEdad(Number(e.target.value))} />
        </label>
        <label>Energía: {energia}
          <input type="range" min="0" max="100" value={energia} onChange={e => setEnergia(Number(e.target.value))} />
        </label>
        <label>Ánimo:
          <select value={animo} onChange={e => setAnimo(e.target.value)}>
            <option value="feliz">Feliz</option>
            <option value="triste">Triste</option>
            <option value="cansado">Cansado</option>
            <option value="neutral">Neutral</option>
          </select>
        </label>
      </div>
    </section>
  );
} 