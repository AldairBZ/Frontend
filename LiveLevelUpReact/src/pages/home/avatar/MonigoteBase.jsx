import React from 'react';

// Monigote base: cuerpo entero, piel clara, sin ropa ni accesorios
export default function MonigoteBase({ style = {} }) {
  return (
    <svg
      width="160"
      height="320"
      viewBox="0 0 160 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      {/* Cabeza */}
      <ellipse cx="80" cy="54" rx="38" ry="44" fill="#fbe7d0" stroke="#e0c3a0" strokeWidth="2" />
      {/* Cuerpo */}
      <rect x="48" y="98" width="64" height="90" rx="32" fill="#fbe7d0" stroke="#e0c3a0" strokeWidth="2" />
      {/* Brazos */}
      <rect x="16" y="110" width="28" height="80" rx="14" fill="#fbe7d0" stroke="#e0c3a0" strokeWidth="2" />
      <rect x="116" y="110" width="28" height="80" rx="14" fill="#fbe7d0" stroke="#e0c3a0" strokeWidth="2" />
      {/* Piernas */}
      <rect x="52" y="188" width="20" height="90" rx="10" fill="#fbe7d0" stroke="#e0c3a0" strokeWidth="2" />
      <rect x="88" y="188" width="20" height="90" rx="10" fill="#fbe7d0" stroke="#e0c3a0" strokeWidth="2" />
      {/* Carita simple */}
      <ellipse cx="68" cy="54" rx="4" ry="6" fill="#222" />
      <ellipse cx="92" cy="54" rx="4" ry="6" fill="#222" />
      <ellipse cx="80" cy="70" rx="8" ry="4" fill="#e0bfa0" />
    </svg>
  );
} 