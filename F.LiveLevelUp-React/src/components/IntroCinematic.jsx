import React, { useState, useEffect } from 'react';
import './IntroCinematic.css';

function SocialButtons() {
  return (
    <div className="social-btns">
      <button className="social github">GitHub</button>
      <button className="social google">Google</button>
      <button className="social facebook">Facebook</button>
      <button className="social instagram">Instagram</button>
    </div>
  );
}

function LoginForm() {
  return (
    <div className="form-dropdown glass-modern">
      <h3>Iniciar Sesión</h3>
      <div className="input-row">
        <input type="text" placeholder="Usuario o Email" />
        <input type="password" placeholder="Contraseña" />
      </div>
      <button className="form-btn">Entrar</button>
      <SocialButtons />
    </div>
  );
}

function RegisterForm() {
  return (
    <div className="form-dropdown glass-modern">
      <h3>Registrarse</h3>
      <div className="input-row">
        <input type="text" placeholder="Nombre de usuario" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Contraseña" />
      </div>
      <button className="form-btn">Crear cuenta</button>
      <SocialButtons />
    </div>
  );
}

function PlanetSVG() {
  // Planeta cartoon inspirado en la imagen realista
  return (
    <svg className="planet-svg" width="300" height="300" viewBox="0 0 300 300" style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
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
      {/* Atmósfera */}
      <circle cx="150" cy="150" r="140" fill="url(#atm)" />
      {/* Planeta base */}
      <circle cx="150" cy="150" r="120" fill="url(#planetGrad)" />
      {/* Continentes cartoon con formas irregulares */}
      <path d="M120,170 Q110,120 170,110 Q180,150 140,180 Q130,180 120,170" fill="url(#land1)" />
      <ellipse cx="180" cy="140" rx="28" ry="14" fill="url(#land2)" />
      <ellipse cx="110" cy="110" rx="18" ry="8" fill="#B4F8C8" />
      {/* Nubes */}
      <ellipse cx="170" cy="100" rx="22" ry="7" fill="#fff" opacity="0.18" />
      <ellipse cx="120" cy="90" rx="12" ry="4" fill="#fff" opacity="0.13" />
      {/* Sombra */}
      <ellipse cx="150" cy="200" rx="80" ry="18" fill="#222" opacity="0.10" />
    </svg>
  );
}

function Meteoritos() {
  // Meteoritos SVG cartoon-realistas
  const [meteors, setMeteors] = useState([]);
  useEffect(() => {
    const interval = setInterval(() => {
      setMeteors(mets => [
        ...mets.filter(m => m.t < Date.now() + 4000),
        {
          id: Math.random().toString(36).slice(2),
          x0: Math.random() < 0.5 ? -80 : window.innerWidth + 80,
          y0: Math.random() * window.innerHeight * 0.8 + 40,
          angle: Math.random() * Math.PI / 3 - Math.PI / 6, // -30 a +30 grados
          speed: 2 + Math.random() * 2,
          t: Date.now(),
          size: 24 + Math.random() * 24
        }
      ]);
    }, 900);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      {meteors.map(m => (
        <svg key={m.id} className="meteorito-svg" style={{ left: m.x0 < 0 ? 0 : undefined, right: m.x0 > window.innerWidth ? 0 : undefined, top: m.y0, animation: `meteorito-move-${m.x0 < 0 ? 'r' : 'l'} ${2.5 + Math.random()}s linear`, transform: `rotate(${m.angle}rad)` }} width={m.size} height={m.size / 2} viewBox="0 0 60 30">
          {/* Cuerpo irregular */}
          <ellipse cx="18" cy="15" rx="12" ry="8" fill="#ffe082" />
          <ellipse cx="28" cy="13" rx="7" ry="5" fill="#ffd54f" />
          {/* Cráteres */}
          <ellipse cx="15" cy="13" rx="2" ry="1.2" fill="#e0b800" opacity="0.5" />
          <ellipse cx="22" cy="18" rx="1.5" ry="1" fill="#e0b800" opacity="0.4" />
          {/* Cola de fuego */}
          <path d="M5,15 Q-10,10 5,5" stroke="#ffd54f" strokeWidth="4" fill="none" opacity="0.7" />
          <path d="M5,15 Q-8,20 5,25" stroke="#ff9800" strokeWidth="3" fill="none" opacity="0.5" />
        </svg>
      ))}
    </>
  );
}

export default function IntroCinematic() {
  const [showForm, setShowForm] = useState(''); // '' | 'login' | 'register'

  return (
    <div className="intro-cinematic">
      <div className="space-bg">
        <PlanetSVG />
        <Meteoritos />
      </div>
      <div className="intro-content">
        <h1 className="intro-title">LiveLevelUp</h1>
        <h2 className="intro-sub">Tu vida tiene más impacto del que imaginas...</h2>
        <div className="intro-btns glass-modern">
          <button className={`intro-btn sec${showForm === 'login' ? ' active' : ''}`} onClick={() => setShowForm(showForm === 'login' ? '' : 'login')}>Login</button>
          <button className={`intro-btn sec${showForm === 'register' ? ' active' : ''}`} onClick={() => setShowForm(showForm === 'register' ? '' : 'register')}>Registrarse</button>
        </div>
        <div className="form-dropdown-wrap">
          {showForm === 'login' && <LoginForm />}
          {showForm === 'register' && <RegisterForm />}
        </div>
      </div>
    </div>
  );
} 