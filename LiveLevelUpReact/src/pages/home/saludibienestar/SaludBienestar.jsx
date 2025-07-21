import React, { useState, useRef, useEffect } from 'react';
import styles from './SaludBienestar.module.css';
import perfilImg from '../../../assets/imagenes-home/perfil/perfil.png';

export default function SaludBienestar() {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const profileBtnRef = useRef(null);
  const menuRef = useRef(null);

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
    <div className={darkMode ? styles.homeWrapper + ' dark-mode' : styles.homeWrapper}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <span>LifeLevelUp</span>
          </div>
          <ul className={styles.menu}>
            <li>
              <a href="/home" className={styles.active}>Home</a>
            </li>
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
                style={{background: 'transparent', border: 'none', padding: 0, cursor: 'pointer', marginLeft: '-12px', borderRadius: '12px', boxShadow: showProfileMenu ? '0 0 0 2px #81ca57' : '0 2px 8px #0002', transition: 'box-shadow 0.2s'}}
                title="Usuario"
                onClick={() => setShowProfileMenu((v) => !v)}
              >
                <img
                  src={perfilImg}
                  alt="Perfil"
                  style={{ width: 40, height: 40, borderRadius: '50%', objectFit: 'cover', border: darkMode ? '2px solid #81ca57' : '2px solid #5b9cc8', background: darkMode ? '#232e43' : '#fff', transition: 'border 0.2s, background 0.2s' }}
                />
              </button>
              {showProfileMenu && (
                <div ref={menuRef} className={styles.profileMenu + ' ' + (darkMode ? styles.profileMenuDark : '')}>
                  <button className={styles.profileMenuItem}>Editar perfil</button>
                  <button className={styles.profileMenuItem + ' ' + styles.logoutBtn}>Cerrar sesión</button>
                </div>
              )}
            </div>
          </div>
        </nav>
      </header>
      <div style={{height: 60}} />
      {/* BODY PRINCIPAL */}
      {/* Aquí puedes volver a agregar el layout principal, asegurándote de definir correctamente los estados y lógica si los necesitas. */}
      {/* SECCIÓN DE NOTICIAS */}
      <section className="w-full max-w-5xl mx-auto px-4 pb-4">
        <div className="flex gap-4 overflow-x-auto py-2 scrollbar-thin scrollbar-thumb-blue-200">
          {/* Tarjetas de noticias (placeholder) */}
          <div className="min-w-[220px] bg-white rounded-lg shadow flex items-center gap-3 p-4 border border-blue-100">
            <span className="text-2xl">📰</span>
            <div>
              <h3 className="font-bold text-blue-700">Nueva rutina saludable</h3>
              <p className="text-gray-500 text-sm">Descubre cómo mejorar tu día</p>
            </div>
          </div>
          <div className="min-w-[220px] bg-white rounded-lg shadow flex items-center gap-3 p-4 border border-blue-100">
            <span className="text-2xl">🍎</span>
            <div>
              <h3 className="font-bold text-blue-700">Consejo de alimentación</h3>
              <p className="text-gray-500 text-sm">Incluye frutas en tu desayuno.</p>
            </div>
          </div>
          <div className="min-w-[220px] bg-white rounded-lg shadow flex items-center gap-3 p-4 border border-blue-100">
            <span className="text-2xl">💤</span>
            <div>
              <h3 className="font-bold text-blue-700">Importancia del descanso</h3>
              <p className="text-gray-500 text-sm">Dormir bien mejora tu salud.</p>
            </div>
          </div>
        </div>
      </section>
      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className="flex flex-col md:flex-row justify-center gap-8 text-lg font-semibold">
          <div>
            Uso de datos y privacidad
            <div className="text-sm font-normal">Política de privacidad</div>
          </div>
          <div>
            Webs de confianza
            <div className="text-sm font-normal">Referentes<br/>Partners</div>
          </div>
          <div>
            Quiénes somos
            <div className="text-sm font-normal">Equipo<br/>Historia</div>
          </div>
        </div>
      </footer>
    </div>
  );
} 