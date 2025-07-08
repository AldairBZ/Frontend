import React, { useState } from 'react';
import './Login.css';

export default function Login() {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');

  const login = (e) => {
    e.preventDefault();
    if (usuario === 'arbol' && contrasena === 'verde') {
      alert('¡Bienvenido al bosque!');
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className="login-container">
      <div className="login-forest-bg">
        <div className="tree">
          <div className="trunk"></div>
          <div className="leaves"></div>
        </div>
        <div className="tree" style={{ left: '60vw', bottom: '140px', transform: 'scale(1.2)' }}>
          <div className="trunk"></div>
          <div className="leaves"></div>
        </div>
        <div className="tree" style={{ left: '35vw', bottom: '110px', transform: 'scale(0.8)' }}>
          <div className="trunk"></div>
          <div className="leaves"></div>
        </div>
        <div className="login-card">
          <h2 className="login-title">Inicia sesión en el Bosque</h2>
          <form onSubmit={login}>
            <label className="login-label">Usuario:</label>
            <input type="text" value={usuario} onChange={e => setUsuario(e.target.value)} className="login-input" required />
            <label className="login-label">Contraseña:</label>
            <input type="password" value={contrasena} onChange={e => setContrasena(e.target.value)} className="login-input" required />
            <button type="submit" className="login-btn">Entrar</button>
          </form>
        </div>
      </div>
    </div>
  );
} 