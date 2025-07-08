import React, { useState } from 'react';
import './IntroCinematic.css';

export default function IntroCinematic({ onEnter }) {
  const [fade, setFade] = useState(false);

  const handleEnter = () => {
    setFade(true);
    setTimeout(() => onEnter(), 900);
  };

  return (
    <div className={`intro-cinematic${fade ? ' fade-out' : ''}`}>
      <div className="space-bg">
        <div className="planet-spin"></div>
        <div className="nave nave1"></div>
        <div className="nave nave2"></div>
        <div className="nave nave3"></div>
      </div>
      <div className="intro-content">
        <h1 className="intro-title">LiveLevelUp</h1>
        <h2 className="intro-sub">Tu vida tiene más impacto del que imaginas...</h2>
        <button className="intro-btn" onClick={handleEnter}>Entrar</button>
      </div>
    </div>
  );
} 