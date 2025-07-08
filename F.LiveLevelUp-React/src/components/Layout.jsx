import React from 'react';
import './Layout.css';

export default function Layout({ children }) {
  return (
    <div className="layout-root">
      <header className="layout-header">
        <span className="logo">🌱 LiveLevelUp</span>
        <nav className="layout-nav">
          <a href="#avatar">Avatar</a>
          <a href="#habitos">Hábitos</a>
          <a href="#planeta">Planeta</a>
          <a href="#logros">Logros</a>
          <a href="#perfil">Perfil</a>
        </nav>
      </header>
      <main className="layout-main">{children}</main>
    </div>
  );
} 