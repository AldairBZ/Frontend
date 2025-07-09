import React, { useState } from 'react';
import './LoginTriangle.css';
import planetaGif from '../../assets/svg/planet.png';

function PlanetAnimated({ className, style }) {
  return (
    <img src={planetaGif} alt="Planeta" className={className + ' planeta-animado'} style={style} />
  );
}

function SocialLogos() {
  return (
    <div className="triangle-social-logos">
      <button className="social-btn google" title="Google">
        <svg width="28" height="28" viewBox="0 0 48 48"><g><path fill="#4285F4" d="M43.6 20.5H42V20H24v8h11.3C34.7 32.1 30.1 35 24 35c-6.1 0-11.3-5-11.3-11S17.9 13 24 13c2.5 0 4.7.7 6.6 2l6.6-6.6C33.9 5.1 29.2 3 24 3 12.4 3 3 12.4 3 24s9.4 21 21 21c10.5 0 20-7.5 20-21 0-1.4-.2-2.7-.4-3.5z"/><path fill="#34A853" d="M6.3 14.7l6.6 4.8C14.5 16.1 18.8 13 24 13c2.5 0 4.7.7 6.6 2l6.6-6.6C33.9 5.1 29.2 3 24 3 16.1 3 9.1 7.7 6.3 14.7z"/><path fill="#FBBC05" d="M24 45c5.8 0 10.7-1.9 14.2-5.1l-6.6-5.4C29.7 36.5 27 37.5 24 37.5c-6.1 0-11.3-5-11.3-11 0-1.7.4-3.3 1.1-4.7l-6.7-5.2C5.1 19.1 3 21.4 3 24c0 6.6 5.1 12.1 12.3 14.7z"/><path fill="#EA4335" d="M43.6 20.5H42V20H24v8h11.3c-1.2 3.2-4.7 5.5-8.3 5.5-6.1 0-11.3-5-11.3-11 0-1.7.4-3.3 1.1-4.7l-6.7-5.2C5.1 19.1 3 21.4 3 24c0 6.6 5.1 12.1 12.3 14.7z"/></g></svg>
      </button>
      <button className="social-btn github" title="GitHub">
        <svg width="28" height="28" viewBox="0 0 24 24"><path fill="#222" d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.186 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .267.18.578.688.48C19.138 20.203 22 16.445 22 12.021 22 6.484 17.523 2 12 2Z"/></svg>
      </button>
      <button className="social-btn facebook" title="Facebook">
        <svg width="28" height="28" viewBox="0 0 32 32"><path fill="#1877F3" d="M29 0H3C1.3 0 0 1.3 0 3v26c0 1.7 1.3 3 3 3h13V20h-4v-5h4v-3.6C16 7.6 18.4 5 21.7 5c1.2 0 2.3.1 2.6.1v4h-1.8c-1.4 0-1.7.7-1.7 1.6V15h4.3l-.6 5h-3.7v12h7c1.7 0 3-1.3 3-3V3c0-1.7-1.3-3-3-3z"/></svg>
      </button>
    </div>
  );
}

function LoginForm({ onClose }) {
  const [mode, setMode] = useState('login');
  return (
    <div className="triangle-form-content">
      <button className="triangle-close" onClick={onClose}>×</button>
      <h2>{mode === 'login' ? 'Iniciar Sesión' : 'Crear Cuenta'}</h2>
      <form className="triangle-form">
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
        <button className="form-btn-triangle" type="submit">
          {mode === 'login' ? 'Entrar' : 'Crear cuenta'}
        </button>
        <div className="switch-mode-triangle">
          {mode === 'login' ? (
            <span>¿No tienes cuenta? <button type="button" onClick={() => setMode('register')}>Crear cuenta</button></span>
          ) : (
            <span>¿Ya tienes cuenta? <button type="button" onClick={() => setMode('login')}>Iniciar sesión</button></span>
          )}
        </div>
        <SocialLogos />
      </form>
    </div>
  );
}

export default function LoginTriangle() {
  const [showTriangle, setShowTriangle] = useState(false);

  // Coordenadas para la punta del triángulo (ajustar según el layout)
  // Calculamos top y left para la esquina superior izquierda del panel de login
  const planetStyle = showTriangle
    ? {
        position: 'fixed',
        left: 'calc(100vw - 400px)',
        top: 'calc(50vh - 130px)',
        transform: 'translateX(-100%)',
        zIndex: 25,
        pointerEvents: 'none',
        transition: 'left 0.7s cubic-bezier(.23,1.12,.32,1), top 0.7s cubic-bezier(.23,1.12,.32,1), transform 0.7s cubic-bezier(.23,1.12,.32,1), width 0.7s cubic-bezier(.23,1.12,.32,1), height 0.7s cubic-bezier(.23,1.12,.32,1)',
        width: '260px',
        height: '260px',
        opacity: 1,
        filter: 'drop-shadow(0 0 64px #1976d2cc)'
      }
    : {
        position: 'fixed',
        left: 'calc(100vw - 400px)',
        top: 'calc(50vh - 75px)',
        transform: 'translateX(-100%)',
        zIndex: 25,
        pointerEvents: 'none',
        transition: 'left 0.7s cubic-bezier(.23,1.12,.32,1), top 0.7s cubic-bezier(.23,1.12,.32,1), transform 0.7s cubic-bezier(.23,1.12,.32,1), width 0.7s cubic-bezier(.23,1.12,.32,1), height 0.7s cubic-bezier(.23,1.12,.32,1)',
        width: '150px',
        height: '150px',
        opacity: 1,
        filter: 'drop-shadow(0 0 64px #1976d2cc)'
      };

  return (
    <div className="triangle-bg">
      {/* Planeta animado, centro en intro y punta del triángulo en login */}
      <div style={planetStyle}>
        <PlanetAnimated className="planet-svg-triangle" style={{width: '100%', height: '100%'}} />
      </div>
      {/* Overlay detrás de todo para oscurecer el fondo, sin tapar el planeta ni el login */}
      {showTriangle && <div className="triangle-overlay" style={{zIndex: 1}} />}
      {/* Contenido principal */}
      <div className="triangle-center-content" style={{zIndex: 10}}>
        <h1 className={`triangle-title${showTriangle ? ' fade-out' : ''}`}>LiveLevelUp</h1>
        <h2 className={`triangle-subtitle${showTriangle ? ' fade-out' : ''}`}>Tu vida tiene más impacto del que imaginas...</h2>
        {!showTriangle && (
          <button className="triangle-btn" onClick={() => setShowTriangle(true)}>Entrar</button>
        )}
      </div>
      <div className={`triangle-panel-anim ${showTriangle ? 'show' : ''}`} style={{zIndex: 20}}>
        {showTriangle && <LoginForm onClose={() => setShowTriangle(false)} />}
      </div>
    </div>
  );
} 