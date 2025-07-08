import React from 'react';

export default function Torso({ color = '#B4F8C8' }) {
  return (
    <path d="M60 90 Q90 120 60 170 Q30 120 60 90" fill={color} filter="drop-shadow(0 2px 8px #A0E7E5)" />
  );
} 