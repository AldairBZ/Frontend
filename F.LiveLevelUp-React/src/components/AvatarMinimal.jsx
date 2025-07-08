import React from 'react';
import './AvatarMinimal.css';

export default function AvatarMinimal({ altura = 170, peso = 70, edad = 25, energia = 80, animo = 'feliz' }) {
  // Escalas para el avatar
  const escalaAltura = Math.max(1, (altura - 120) / 80); // 1 a 2
  const escalaPeso = Math.max(1, (peso - 40) / 60); // 1 a 2
  const colorEdad = edad < 40 ? '#FFCECE' : edad < 70 ? '#E0CFCF' : '#C0C0C0';
  const brillo = energia > 70 ? 'brightness(1.1)' : energia > 40 ? 'brightness(0.95)' : 'brightness(0.8)';
  const emojiAnimo = animo === 'feliz' ? '😊' : animo === 'triste' ? '😢' : animo === 'cansado' ? '😴' : '😐';

  return (
    <div className="avatar-minimal" style={{ alignItems: 'center', filter: brillo }}>
      {/* Cabeza */}
      <div className="avatar-cabeza" style={{ background: colorEdad }}>
        <span className="avatar-cara">{emojiAnimo}</span>
      </div>
      {/* Tronco */}
      <div className="avatar-tronco" style={{ background: colorEdad, height: 60 * escalaAltura, width: 30 * escalaPeso }} />
      {/* Brazos */}
      <div className="avatar-brazo avatar-brazo-izq" style={{ background: colorEdad, width: 40 * escalaPeso }} />
      <div className="avatar-brazo avatar-brazo-der" style={{ background: colorEdad, width: 40 * escalaPeso }} />
      {/* Piernas */}
      <div className="avatar-pierna avatar-pierna-izq" style={{ background: colorEdad, height: 60 * escalaAltura }} />
      <div className="avatar-pierna avatar-pierna-der" style={{ background: colorEdad, height: 60 * escalaAltura }} />
    </div>
  );
} 