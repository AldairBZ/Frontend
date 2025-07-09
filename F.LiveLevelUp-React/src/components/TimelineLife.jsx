import React from 'react';
import './TimelineLife.css';

export default function TimelineLife({ eventos = [] }) {
  return (
    <div className="timeline-life">
      <svg width={Math.max(600, eventos.length * 120)} height="90">
        {/* Línea base */}
        <line x1="40" y1="45" x2={40 + (eventos.length - 1) * 120} y2="45" stroke="#1976D2" strokeWidth="6" strokeLinecap="round" />
        {/* Nodos */}
        {eventos.map((ev, i) => (
          <g key={i} className="timeline-node" style={{ transition: 'transform 0.5s cubic-bezier(.4,2,.6,1)' }}>
            <circle cx={40 + i * 120} cy="45" r="22" fill="#A0E7E5" stroke="#1976D2" strokeWidth="3" />
            <text x={40 + i * 120} y="52" textAnchor="middle" fontSize="1.7rem">{ev.emoji}</text>
            <text x={40 + i * 120} y="80" textAnchor="middle" fontSize="0.9rem" fill="#1976D2">{ev.texto}</text>
          </g>
        ))}
      </svg>
    </div>
  );
} 