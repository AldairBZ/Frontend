import React from 'react';

export default function Header() {
  return (
    <header className="header">
      <h1 className="titulo">🌱 LifeLevelUp</h1>
      <nav className="nav">
        <a href="/inicio">Inicio</a>
        <a href="/habitos">Hábitos</a>
        <a href="/avatar">Avatar</a>
        <a href="/planeta">Planeta</a>
        <a href="/logros">Logros</a>
      </nav>
      <div className="contador-global">Acciones ecológicas globales: <span>0</span></div>
    </header>
  );
} 