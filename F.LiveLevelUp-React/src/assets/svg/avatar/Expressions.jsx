import React from 'react';

export default function Expressions({ type = 'none' }) {
  // type puede ser 'sweat', 'heart', 'star', etc.
  if (type === 'sweat') {
    return <ellipse cx="80" cy="40" rx="4" ry="8" fill="#A0E7E5" opacity="0.7" />;
  }
  if (type === 'heart') {
    return (
      <g>
        <path d="M60 60 Q62 58 64 60 Q66 62 64 64 Q62 66 60 64 Q58 62 60 60" fill="#FFB3C6" />
      </g>
    );
  }
  if (type === 'star') {
    return (
      <g>
        <polygon points="60,35 62,41 68,41 63,45 65,51 60,47 55,51 57,45 52,41 58,41" fill="#FFD700" />
      </g>
    );
  }
  return null;
} 