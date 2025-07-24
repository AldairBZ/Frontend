import React from 'react';

// Monigote base: cuerpo entero, piel clara, brazos cartoon conectados a hombros y separados del cuerpo
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
      {/* Sombra bajo los pies */}
      <ellipse cx="80" cy="305" rx="32" ry="10" fill="#e0c3a0" opacity="0.18" />
      {/* Torso y caderas (con entrepierna para conectar piernas) */}
      <path
        d="M60 110
          Q 55 150, 66 182
          Q 70 190, 80 192
          Q 90 190, 94 182
          Q 105 150, 100 110
          Q 100 90, 80 90
          Q 60 90, 60 110
          Z"
        fill="#fbe7d0"
        stroke="#e0c3a0"
        strokeWidth="2"
      />
      {/* Pierna izquierda (conectada al torso) */}
      <path
        d="M66 182
          Q 56 220, 60 260
          Q 62 285, 56 295
          Q 68 302, 78 295
          Q 74 285, 74 260
          Q 76 220, 80 192
          Q 70 190, 66 182
          Z"
        fill="#fbe7d0"
        stroke="#e0c3a0"
        strokeWidth="2.5"
      />
      {/* Pie izquierdo */}
      <ellipse cx="65" cy="299" rx="14" ry="7" fill="#fbe7d0" stroke="#e0c3a0" strokeWidth="2" />
      {/* Pierna derecha (conectada al torso) */}
      <path
        d="M94 182
          Q 104 220, 100 260
          Q 98 285, 104 295
          Q 92 302, 82 295
          Q 86 285, 86 260
          Q 84 220, 80 192
          Q 90 190, 94 182
          Z"
        fill="#fbe7d0"
        stroke="#e0c3a0"
        strokeWidth="2.5"
      />
      {/* Pie derecho */}
      <ellipse cx="95" cy="299" rx="14" ry="7" fill="#fbe7d0" stroke="#e0c3a0" strokeWidth="2" />
      {/* Cuello */}
      <rect x="70" y="78" width="20" height="22" rx="8" fill="#fbe7d0" stroke="#e0c3a0" strokeWidth="2" />
      {/* Cabeza */}
      <ellipse cx="80" cy="54" rx="28" ry="32" fill="#fbe7d0" stroke="#e0c3a0" strokeWidth="2" />
      {/* Brazo izquierdo cartoon, piel clara, conectado a hombro y separado */}
      <path
        d="M62 100
          Q 30 120, 44 180
          Q 48 200, 66 185
          Q 56 150, 62 100
          Z"
        fill="#fbe7d0"
        stroke="#e0c3a0"
        strokeWidth="2"
      />
      {/* Mano izquierda cartoon */}
      <path
        d="M44 180 Q 38 188, 52 192 Q 44 196, 60 198"
        fill="none"
        stroke="#e0c3a0"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Brazo derecho cartoon, piel clara, conectado a hombro y separado */}
      <path
        d="M98 100
          Q 130 120, 116 180
          Q 112 200, 94 185
          Q 104 150, 98 100
          Z"
        fill="#fbe7d0"
        stroke="#e0c3a0"
        strokeWidth="2"
      />
      {/* Mano derecha cartoon */}
      <path
        d="M116 180 Q 122 188, 108 192 Q 116 196, 100 198"
        fill="none"
        stroke="#e0c3a0"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Carita simple */}
      <ellipse cx="72" cy="54" rx="3.5" ry="5" fill="#222" />
      <ellipse cx="88" cy="54" rx="3.5" ry="5" fill="#222" />
      <ellipse cx="80" cy="68" rx="7" ry="3" fill="#e0bfa0" />
    </svg>
  );
} 