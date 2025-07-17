import React, { useState, useRef, useEffect } from 'react';
import styles from './Home.module.css';
import logoLiveUp from '../../assets/imagenes-home/logoLiveUp.png';
import PanelesInteractivos from './PanelesInteractivos';
import QuienesSomos from './footer/equipo/QuienesSomos.jsx';
import Privacidad from './footer/privacidad/Terminos.jsx';
import Referentes from './footer/referentes/Referentes.jsx';
// Importación condicional del CSS de modo oscuro

export default function Home() {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false); // Por defecto, modo claro
  const profileBtnRef = useRef(null);
  const menuRef = useRef(null);
  // Estado para controlar el modal del footer
  const [modalAbierto, setModalAbierto] = useState(null); // 'equipo', 'privacidad', 'referentes' o null

  useEffect(() => {
    let darkThemeLink = document.getElementById('dark-theme-css');
    if (darkMode) {
      if (!darkThemeLink) {
        darkThemeLink = document.createElement('link');
        darkThemeLink.rel = 'stylesheet';
        darkThemeLink.id = 'dark-theme-css';
        darkThemeLink.href = '/src/pages/home/dark-theme.css';
        document.head.appendChild(darkThemeLink);
      }
    } else {
      if (darkThemeLink) {
        darkThemeLink.parentNode.removeChild(darkThemeLink);
      }
    }
    return () => {
      const link = document.getElementById('dark-theme-css');
      if (link) link.parentNode.removeChild(link);
    };
  }, [darkMode]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        profileBtnRef.current &&
        !profileBtnRef.current.contains(event.target)
      ) {
        setShowProfileMenu(false);
      }
    }
    if (showProfileMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showProfileMenu]);

  return (
    <div className={styles.homeWrapper}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <span>LiveLevelUp</span>
          </div>
          <ul className={styles.menu}>
            <li>
              <a href="#">Salud</a>
            </li>
            <li>
              <a href="#">Planeta</a>
            </li>
          </ul>
          <div style={{display:'flex',alignItems:'center',gap:'18px'}}>
            <div className={styles.options}>
              <label className={styles.switchLabel}>
                <input type="checkbox" checked={darkMode} onChange={e => setDarkMode(e.target.checked)} className={styles.switchInput} />
                <span className={styles.switchSlider}></span>
                <span className={styles.switchText}>{darkMode ? '🌙' : '☀️'}</span>
              </label>
            </div>
          <div className={styles.actions}>
            <button
              ref={profileBtnRef}
              style={{background: 'transparent', border: 'none', padding: 0, cursor: 'pointer', marginLeft: '-12px'}}
              title="Usuario"
              onClick={() => setShowProfileMenu((v) => !v)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 24 24" width="40" height="40">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path>
                </g>
              </svg>
            </button>
            {showProfileMenu && (
              <div ref={menuRef} className={styles.profileMenu}>
                <button className={styles.profileMenuItem}>Editar perfil</button>
                <button className={styles.profileMenuItem}>Cerrar sesión</button>
              </div>
            )}
            </div>
          </div>
        </nav>
      </header>
      <main className={styles.main}>
        <PanelesInteractivos />
      </main>
      <footer className={styles.footer}>
        <div className={styles['footer-container']}>
          <div className={styles['footer-col']}>
            <h3>Uso de datos y privacidad</h3>
            <ul>
              <li><a href="#" onClick={e => {e.preventDefault(); setModalAbierto('privacidad');}}>Política de privacidad</a></li>
            </ul>
          </div>
          <div className={styles['footer-col']}>
            <h3>Webs de confianza</h3>
            <ul>
              <li><a href="#" onClick={e => {e.preventDefault(); setModalAbierto('referentes');}}>Referentes</a></li>
              <li><a href="#">Partners</a></li>
            </ul>
          </div>
          <div className={styles['footer-col']}>
            <h3>Quiénes somos</h3>
            <ul>
              <li><a href="#" onClick={e => {e.preventDefault(); setModalAbierto('equipo');}}>Equipo</a></li>
              <li><a href="#" onClick={e => {e.preventDefault(); setModalAbierto('historia');}}>Historia</a></li>
            </ul>
          </div>
        </div>
        <div className={styles['footer-bottom']}>
        </div>
      </footer>
      {/* Modal para mostrar los componentes */}
      {modalAbierto && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(0,0,0,0.45)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
          onClick={() => setModalAbierto(null)}
        >
          <div style={{
            background: '#fff',
            borderRadius: 16,
            boxShadow: '0 4px 32px #0003',
            padding: 0,
            maxWidth: 900,
            width: '95vw',
            maxHeight: '90vh',
            overflowY: 'auto',
            position: 'relative',
          }}
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setModalAbierto(null)}
              style={{
                position: 'absolute',
                top: 12,
                right: 16,
                background: '#5b9cc8',
                color: '#fff',
                border: 'none',
                borderRadius: 8,
                padding: '6px 16px',
                fontWeight: 600,
                fontSize: 18,
                cursor: 'pointer',
                zIndex: 2
              }}
            >Cerrar ✕</button>
            {modalAbierto === 'equipo' && <QuienesSomos />}
            {modalAbierto === 'privacidad' && <Privacidad onClose={() => setModalAbierto(null)} />}
            {modalAbierto === 'referentes' && <Referentes />}
            {(modalAbierto === 'cookies' || modalAbierto === 'historia') && (
              <div style={{padding: 48, minHeight: 120, minWidth: 320}}>
                <h1 style={{fontSize: 28, marginBottom: 24, color: '#232e43'}}>
                  {modalAbierto === 'cookies' ? 'Cookies' : 'Historia'}
                </h1>
                {modalAbierto === 'historia' && (
                  <div style={{fontSize: 18, color: '#232e43', lineHeight: 1.6}}>
                    <p>🧬 <b>Nuestra Historia</b></p>
                    <p>Todo empezó con una simple pregunta:<br/>
                    ¿Y si nuestras decisiones diarias pudieran salvarnos… y salvar al planeta?</p>
                    <p>LiveLevelUp nació como un proyecto que une tecnología, salud y conciencia colectiva. Queríamos algo más que una app informativa: queríamos una experiencia que te hiciera ver, sentir y actuar.</p>
                    <p>Nos dimos cuenta de que muchas plataformas hablan de bienestar o sostenibilidad… pero pocas conectan ambas cosas de forma visual, educativa y accesible para todos.</p>
                    <p>Así nació LiveLevelUp.<br/>
                    Un espacio donde tu avatar evoluciona contigo, donde tus decisiones tienen consecuencias, y donde cada cambio cuenta —no solo para ti, sino para todos.</p>
                    <p>Porque creemos que el cambio empieza en lo pequeño. En lo personal. En lo cotidiano.<br/>
                    Y si muchas personas lo hacen a la vez... el mundo también mejora.</p>
                    <p style={{marginTop: 32}}>
                    Somos un equipo de jóvenes diseñadores, desarrolladores y soñadores comprometidos con el futuro.<br/>
                    Y sí, también usamos LiveLevelUp cada día.<br/>
                    — El equipo de LiveLevelUp</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
} 