import React from 'react';

// Avatar SVG cartoon moderno, amigable y responsivo
export default function ModernAvatar({ size = 160 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block', margin: '0 auto' }}
    >
      {/* Cabeza */}
      <ellipse cx="80" cy="54" rx="32" ry="34" fill="#ffe0b2" stroke="#e0b090" strokeWidth="2" />
      {/* Cabello */}
      <ellipse cx="80" cy="38" rx="28" ry="18" fill="#fbc02d" />
      <ellipse cx="60" cy="44" rx="8" ry="6" fill="#fbc02d" />
      <ellipse cx="100" cy="44" rx="8" ry="6" fill="#fbc02d" />
      {/* Orejas */}
      <ellipse cx="46" cy="58" rx="6" ry="10" fill="#ffe0b2" />
      <ellipse cx="114" cy="58" rx="6" ry="10" fill="#ffe0b2" />
      {/* Cuerpo */}
      <rect x="56" y="88" width="48" height="44" rx="18" fill="#64b5f6" stroke="#1976d2" strokeWidth="2" />
      {/* Cuello */}
      <rect x="72" y="74" width="16" height="18" rx="6" fill="#ffe0b2" />
      {/* Brazos */}
      <rect x="36" y="98" width="18" height="10" rx="5" fill="#ffe0b2" />
      <rect x="106" y="98" width="18" height="10" rx="5" fill="#ffe0b2" />
      {/* Piernas */}
      <rect x="66" y="132" width="10" height="22" rx="5" fill="#bdbdbd" />
      <rect x="84" y="132" width="10" height="22" rx="5" fill="#bdbdbd" />
      {/* Ojos */}
      <ellipse cx="70" cy="56" rx="4" ry="5" fill="#333" />
      <ellipse cx="90" cy="56" rx="4" ry="5" fill="#333" />
      {/* Boca */}
      <path d="M72 68 Q80 76 88 68" stroke="#e57373" strokeWidth="2" fill="none" />
    </svg>
  );
} 