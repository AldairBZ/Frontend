import React from 'react';

export default function AvatarSVG({ altura = 170, peso = 70, edad = 25, energia = 80, animo = 'feliz' }) {
  // Escalado proporcional
  const escalaAltura = 0.9 + ((altura - 120) / 100) * 0.7; // 0.9 a 1.6
  const escalaPeso = 0.8 + ((peso - 40) / 80) * 0.7; // 0.8 a 1.5
  // Color de piel según edad
  const colorPiel = edad < 40 ? '#FFCECE' : edad < 70 ? '#E0CFCF' : '#C0C0C0';
  // Brillo según energía
  const brillo = energia > 70 ? 1 : energia > 40 ? 0.92 : 0.8;
  // Expresión facial
  let boca = '';
  let ojos = '';
  if (animo === 'feliz') {
    boca = 'M60 110 Q70 120 80 110';
    ojos = <><ellipse cx="65" cy="90" rx="4" ry="6" fill="#222" /><ellipse cx="75" cy="90" rx="4" ry="6" fill="#222" /></>;
  } else if (animo === 'triste') {
    boca = 'M60 120 Q70 110 80 120';
    ojos = <><ellipse cx="65" cy="92" rx="4" ry="4" fill="#222" /><ellipse cx="75" cy="92" rx="4" ry="4" fill="#222" /></>;
  } else if (animo === 'cansado') {
    boca = 'M62 115 Q70 118 78 115';
    ojos = <><ellipse cx="65" cy="92" rx="4" ry="2" fill="#222" /><ellipse cx="75" cy="92" rx="4" ry="2" fill="#222" /></>;
  } else {
    boca = 'M62 115 Q70 115 78 115';
    ojos = <><ellipse cx="65" cy="92" rx="4" ry="4" fill="#222" /><ellipse cx="75" cy="92" rx="4" ry="4" fill="#222" /></>;
  }
  // Sombra
  const sombra = 'drop-shadow(0 4px 16px #A0E7E5)';

  return (
    <svg
      width={160 * escalaPeso}
      height={260 * escalaAltura}
      viewBox="0 0 160 260"
      style={{ filter: `brightness(${brillo}) ${sombra}`, transition: 'all 0.4s cubic-bezier(.4,2,.6,1)' }}
    >
      {/* Piernas */}
      <rect x="60" y="170" width="14" height="60" rx="7" fill={colorPiel} />
      <rect x="86" y="170" width="14" height="60" rx="7" fill={colorPiel} />
      {/* Zapatos */}
      <ellipse cx="67" cy="230" rx="12" ry="7" fill="#1976D2" />
      <ellipse cx="93" cy="230" rx="12" ry="7" fill="#1976D2" />
      {/* Tronco */}
      <ellipse cx="80" cy="140" rx={32 * escalaPeso} ry={44 * escalaAltura} fill="#B4F8C8" />
      {/* Brazos */}
      <rect x="28" y="120" width="22" height="12" rx="6" fill={colorPiel} transform="rotate(-18 39 126)" />
      <rect x="110" y="120" width="22" height="12" rx="6" fill={colorPiel} transform="rotate(18 121 126)" />
      {/* Manos */}
      <ellipse cx="32" cy="130" rx="7" ry="7" fill={colorPiel} />
      <ellipse cx="128" cy="130" rx="7" ry="7" fill={colorPiel} />
      {/* Cabeza */}
      <ellipse cx="72" cy="80" rx={28 * escalaPeso} ry={32 * escalaAltura} fill={colorPiel} />
      {/* Mejillas */}
      <ellipse cx="60" cy="100" rx="6" ry="3" fill="#FFB3C6" opacity="0.7" />
      <ellipse cx="84" cy="100" rx="6" ry="3" fill="#FFB3C6" opacity="0.7" />
      {/* Ojos y boca */}
      {ojos}
      <path d={boca} stroke="#C97B7B" strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* Cabello cartoon */}
      <path d="M50 65 Q80 40 110 65 Q95 55 80 65 Q65 55 50 65" fill="#A0E7E5" />
      <ellipse cx="80" cy="60" rx="18" ry="7" fill="#A0E7E5" opacity="0.7" />
    </svg>
  );
} 