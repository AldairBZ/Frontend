import React from 'react';

export default function Mouth({ mood = 'smile' }) {
  // mood puede ser 'smile', 'sad', 'neutral', etc.
  let d = '';
  if (mood === 'smile') d = 'M50 70 Q60 80 70 70';
  else if (mood === 'sad') d = 'M50 75 Q60 65 70 75';
  else d = 'M52 72 Q60 75 68 72';
  return <path d={d} stroke="#C97B7B" strokeWidth="3" fill="none" strokeLinecap="round" />;
} 