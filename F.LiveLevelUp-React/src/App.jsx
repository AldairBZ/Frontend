import React, { useState } from 'react';
import IntroCinematic from './components/IntroCinematic';
import AvatarSVG from './components/AvatarSVG';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [altura, setAltura] = useState(170);
  const [peso, setPeso] = useState(70);
  const [edad, setEdad] = useState(25);
  const [energia, setEnergia] = useState(80);
  const [animo, setAnimo] = useState('feliz');

  if (showIntro) {
    return <IntroCinematic onEnter={() => setShowIntro(false)} />;
  }

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #A0E7E5 0%, #B4F8C8 100%)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h2 style={{ marginBottom: 12 }}>🧍 Personaliza tu Avatar</h2>
      <AvatarSVG altura={altura} peso={peso} edad={edad} energia={energia} animo={animo} />
      <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 12, width: 320 }}>
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
      <div style={{ marginTop: 24, fontStyle: 'italic', color: '#1976D2', fontWeight: 500, fontSize: 18 }}>
        {altura < 140 ? '¡Me siento pequeñito!' : altura > 190 ? '¡Qué alto estoy!' : '¡Así me siento mejor!'}
      </div>
      <button style={{ marginTop: 32, fontSize: 18, background: '#ffe082', color: '#222', border: 'none', borderRadius: 24, padding: '0.8rem 2.5rem', fontWeight: 'bold', boxShadow: '0 4px 16px #ffe08255', cursor: 'pointer' }}>
        Guardar mi yo vital
      </button>
    </div>
  );
}