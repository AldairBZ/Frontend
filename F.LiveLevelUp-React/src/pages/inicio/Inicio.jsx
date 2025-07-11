import React from 'react';
import { useNavigate } from 'react-router-dom';
import planetaGif from '../../assets/svg/planet.png';
import FondoEspacioLogin from '../login/FondoEspacioLogin';
import '../login/LoginTriangle.css';

function PlanetAnimated({ className = '', style = {}, onClick }) {
  return (
    <img
      src={planetaGif}
      alt="Planeta"
      className={className + ' planeta-animado'}
      style={{ ...style, cursor: 'pointer' }}
      onClick={onClick}
      tabIndex={0}
      role="button"
      aria-label="Ir a login"
      onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') onClick && onClick(); }}
    />
  );
}

export default function Inicio() {
  const navigate = useNavigate();
  const planetSize = 260;
  const planetStyle = {
    position: 'relative',
    width: planetSize + 'px',
    height: planetSize + 'px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 20,
    margin: '0 auto',
    willChange: 'width, height'
  };
  return (
    <div className="triangle-bg">
      <FondoEspacioLogin />
      <div className="triangle-stack-col" style={{zIndex: 30, position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', width: '100vw'}}>
        <h1 className="triangle-title" style={{marginBottom: '2.5rem'}}>
          <span>LiveLevelUp</span>
        </h1>
        <div style={planetStyle}>
          <div style={{position: 'relative', width: '100%', height: '100%'}}>
            <PlanetAnimated
              className="planet-svg-triangle planeta-clickeable"
              style={{width: '100%', height: '100%', pointerEvents: 'auto', userSelect: 'none'}}
              onClick={() => navigate('/login')}
            />
          </div>
        </div>
        <h2 className="triangle-subtitle" style={{marginTop: '2.5rem', marginBottom: '1.5rem'}}>
          <span>Tu vida tiene más impacto del que imaginas...</span>
        </h2>
      </div>
    </div>
  );
} 