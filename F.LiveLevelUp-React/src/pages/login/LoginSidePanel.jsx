import React, { useState } from 'react';
import './LoginSidePanel.css';

function PlanetSVG() {
  return (
    <svg className="planet-svg-side" width="180" height="180" viewBox="0 0 300 300">
      <defs>
        <radialGradient id="planetGrad" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#A0E7E5" />
          <stop offset="100%" stopColor="#1976D2" />
        </radialGradient>
        <radialGradient id="atm" cx="50%" cy="50%" r="80%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#A0E7E5" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="land1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#B4F8C8" />
          <stop offset="100%" stopColor="#388e3c" />
        </linearGradient>
        <linearGradient id="land2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFCECE" />
          <stop offset="100%" stopColor="#A0E7E5" />
        </linearGradient>
      </defs>
      <circle cx="150" cy="150" r="140" fill="url(#atm)" />
      <circle cx="150" cy="150" r="120" fill="url(#planetGrad)" />
      <path d="M120,170 Q110,120 170,110 Q180,150 140,180 Q130,180 120,170" fill="url(#land1)" />
      <ellipse cx="180" cy="140" rx="28" ry="14" fill="url(#land2)" />
      <ellipse cx="110" cy="110" rx="18" ry="8" fill="#B4F8C8" />
      <ellipse cx="170" cy="100" rx="22" ry="7" fill="#fff" opacity="0.18" />
      <ellipse cx="120" cy="90" rx="12" ry="4" fill="#fff" opacity="0.13" />
      <ellipse cx="150" cy="200" rx="80" ry="18" fill="#222" opacity="0.10" />
    </svg>
  );
}

function AuthCard({ mode, setMode }) {
  return (
    <div className="auth-card-side">
      <h2>{mode === 'login' ? 'Iniciar Sesión' : 'Crear Cuenta'}</h2>
      <form className="auth-form-side">
        {mode === 'register' && (
          <div className="input-group">
            <input type="text" required placeholder="Nombre de usuario" />
          </div>
        )}
        <div className="input-group">
          <input type="email" required placeholder="Email" />
        </div>
        <div className="input-group">
          <input type="password" required placeholder="Contraseña" />
        </div>
        <button className="form-btn-side" type="submit">
          {mode === 'login' ? 'Entrar' : 'Crear cuenta'}
        </button>
        <div className="switch-mode-side">
          {mode === 'login' ? (
            <span>¿No tienes cuenta? <button type="button" onClick={() => setMode('register')}>Crear cuenta</button></span>
          ) : (
            <span>¿Ya tienes cuenta? <button type="button" onClick={() => setMode('login')}>Iniciar sesión</button></span>
          )}
        </div>
      </form>
    </div>
  );
}

export default function LoginSidePanel() {
  const [showPanel, setShowPanel] = useState(false);
  const [mode, setMode] = useState('login');
  return (
    <div className="sidepanel-bg">
      <div className="sidepanel-center-content">
        <PlanetSVG />
        <h1 className="sidepanel-title">LifeLevelUp</h1>
        <h2 className="sidepanel-subtitle">Tu vida tiene más impacto del que imaginas...</h2>
        {!showPanel && (
          <button className="sidepanel-btn" onClick={() => setShowPanel(true)}>Entrar</button>
        )}
      </div>
      <div className={`sidepanel-panel ${showPanel ? 'show' : ''}`}>
        <button className="sidepanel-close" onClick={() => setShowPanel(false)}>×</button>
        <AuthCard mode={mode} setMode={setMode} />
      </div>
      {showPanel && <div className="sidepanel-overlay" onClick={() => setShowPanel(false)} />}
    </div>
  );
} 